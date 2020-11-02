<template>
    <div style="max-width: 450px; padding: 0px;" class="container">
        <!-- PAGE SATU -->
        <section v-if="page1" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <div style="background-color: #EEECD6; padding: 10px;">
                <p style="text-align: justify;">
<font style="font-weight: bold;">PETUNJUK PENGISIAN</font><br />
Formulir  A: Data Profil 
<br />
• Terdiri dari data perusahaan, data produk yang disalurkan dan data karyawan <br />
• Data profil diisi oleh Perusahaan Penyalur Alat Kesehatan dengan lengkap dan benar, dilengkapi dengan dokumen terkait<br />
• Petugas inspeksi mengecek kelengkapan dan kebenaran pengisian formulir melalui verifikasi dokumen<br />
<br />
Formulir  B: Pemeriksaan Sarana PAK<br />
• Obyek inspeksi adalah dokumen, sumber daya manusia, bangunan dan fasilitas, implementasi kegiatan penyaluran, dan produk<br />
• Petugas inspeksi melakukan pengamatan dan penilaian terhadap komponen-komponen persyaratan Cara Distribusi Alat Kesehatan yang Baik (CDAKB)<br />
• Beri tanda √ pada kolom Ya (Y) atau Tidak (T) sesuai dengan hasil pengamatan dan penilaian.<br />
• Petugas mengisi kolom keterangan apabila diperoleh informasi adanya masalah/kendala dan/atau dukungan dalam pelaksanaan masing-masing komponen atau informasi tambahan lainnya<br />
• Petugas mengisi daftar temuan produk alat kesehatan, apabila menemukan adanya ketidak-sesuaian dengan ijin edar, kategori produk dan kualitas produk, atau temuan lainnya<br />
• Petugas mengisi saran/rekomendasi berdasarkan hasil monitoring<br />
<br />
Cara Penghitungan Tingkat Kepatuhan CDAKB<br />
• Untuk setiap butir pertanyaan yang dijawab YA oleh sumber data (informan) dan terbukti ADA pada saat pengamatan, maka diberi skor 1. Bila dijawab TIDAK/TIDAK TAHU oleh sumber data atau terbukti TIDAK ADA pada saat pengamatan, beri skor 0. <br />
• Jumlahkan seluruh skor YA yang diperoleh.<br />
• Hitung persentase tingkat kepatuhan CDAKB dengan cara membagi jumlah skor yang dicapai (N) dengan jumlah skor maksimal kemudian dikalikan 100%. 
</p>
            </div>
            <br />
            <div class="buttons">
                <b-button v-on:click="clearPage(); page2 = true" type="is-primary is-large" expanded>Next</b-button>
            </div>        
  
        </section>

        <!-- PAGE DUA -->
        <section v-if="page2" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <p style="font-weight: bold;">Pilih Petugas {{isUpdate}}</p><br />
            <button style="margin: 5px;" v-for="(item, index) in petugas" :key="item" @click="addPetugas(item)" class="button is-link is-outlined">{{item}}</button>           
            <button style="margin: 5px;" @click="promptLainnya" class="button is-link is-outlined">Lainnya</button>           
            <b-field label="Petugas yang dipilih">
                <b-input v-model="selectedPetugasString"  value=""></b-input>
            </b-field>              
            <b-button type="is-danger" @click="resetPetugas" expanded>Reset Petugas</b-button>
            <br />
            <br />
            <p style="font-weight: bold;">Upload Foto Lokasi</p>
            <ul>
                <li v-if="fotoLokasi.length > 0" v-for="(item, index) in fotoLokasi">
                    <img @click="clickImageLokasi(index)" style="width: 100%;" :src="`${item.response.data.img}`" />
                </li>
            </ul>             
            <file-upload
                style="width: 100%;"
                ref="uploadFotoLokasi"
                :multiple="true"
                v-model="fotoLokasi"
                :post-action="`${this.$api}/upload`"
                @input="onChangeFileLokasi"
            >
                <b-button type="is-success is-medium" expanded>Pilih File</b-button>
                
            </file-upload>
            <br />           
            <br />
            <b-field label="Masukan Tanggal Periksa">
                <b-input size="is-medium" type="date" v-model="form.tgl_periksa" placeholder="Masukan tanggal periksa"></b-input>
            </b-field>             
            <p style="font-weight: bold;">Form A | Data Profil</p>
            <br />
            <b-field label="Nama Badan Hukum Perusahaan">
                <b-input size="is-medium" type="text" v-model="form.nama_perusahaan" placeholder=""></b-input>
            </b-field>
            <p style="font-weight: bold;">Status Perusahaan</p>
            <b-select v-model="form.status_perusahaan" placeholder="Pilihan" expanded>
                <option value="PMA">PMA</option>
                <option value="PMDN">PMDN</option>
            </b-select>            
            <b-field label="Alamat Kantor dan Telp/Fax">
                <b-input size="is-medium" type="text" v-model="form.alamat_kantor_dan_telpfax" placeholder=""></b-input>
            </b-field>
            <b-field label="Alamat Gudang dan Telp/Fax">
                <b-input size="is-medium" type="text" v-model="form.alamat_gudang_dan_telpfax" placeholder=""></b-input>
            </b-field>
            <b-field label="Email">
                <b-input size="is-medium" type="text" v-model="form.email" placeholder=""></b-input>
            </b-field>
            <b-field label="Nama Pimpinan Perusahaan">
                <b-input size="is-medium" type="text" v-model="form.nama_pimpinan" placeholder=""></b-input>
            </b-field>
            <b-field label="Nama Penanggung Jawab Teknis">
                <b-input size="is-medium" type="text" v-model="form.nama_penanggung_jawab_teknis" placeholder=""></b-input>
            </b-field>
            <b-field label="N P W P">
                <b-input size="is-medium" type="text" v-model="form.npwp" placeholder=""></b-input>
            </b-field>
            <b-field label="Nomor Izin Penyalur Alat Kesehatan (Lampirkan Fotokopi IPAK)">
                <b-input size="is-medium" type="text" v-model="form.no_izin_penyalur_alat_kesehatan" placeholder=""></b-input>
            </b-field>
            <br />       

            <p style="font-weight: bold;">II DATA PRODUK YANG DISALURKAN</p>
            <br />
            <p style="font-weight: bold;">Status produk yang disalurkan</p><br />
            <div class="field">
                <b-checkbox v-model="form.status_produk_disalurkan_lokal"
                    true-value="Yes"
                    false-value="No">
                    Lokal
                </b-checkbox>
            </div>            
            <div class="field">
                <b-checkbox v-model="form.status_produk_disalurkan_import"
                    true-value="Yes"
                    false-value="No">
                    Import
                </b-checkbox>
            </div>            
            <p style="font-weight: bold;">Kelompok Alkes yang disalurkan</p><br />
            <div class="field">
                <b-checkbox v-model="form.alkes_elektromagnet_radiasi"
                    true-value="Yes"
                    false-value="No">
                    Alkes Elektromedik Radiasi
                </b-checkbox>
            </div>            
            <div class="field">
                <b-checkbox v-model="form.alkes_elektromagnet_nonradiasi"
                    true-value="Yes"
                    false-value="No">
                    Alkes Elektromedik Non Radiasi
                </b-checkbox>
            </div>            
            <div class="field">
                <b-checkbox v-model="form.alkes_non_elektromedik_steril"
                    true-value="Yes"
                    false-value="No">
                    Alkes Non Elektromedik Steril
                </b-checkbox>
            </div>            
            <div class="field">
                <b-checkbox v-model="form.alkes_non_elektromedik_nonsteril"
                    true-value="Yes"
                    false-value="No">
                    Alkes Non Elektromedik Non Steril
                </b-checkbox>
            </div>            
            <div class="field">
                <b-checkbox v-model="form.alkes_diagnostik_in_vitro"
                    true-value="Yes"
                    false-value="No">
                    Alkes Diagnostik In Vitro
                </b-checkbox>
            </div>   

            <p style="font-weight: bold;">Jenis Alkes Diagnostik In Vitro yang disalurkan</p>
            <br />
            <div class="field">
                <b-checkbox v-model="form.jenis_alkes_instrumen_peralatan"
                    true-value="Yes"
                    false-value="No">
                    Instrumen/Peralatan
                </b-checkbox>
            </div>            
            <div class="field">
                <b-checkbox v-model="form.jenis_alkes_reagen"
                    true-value="Yes"
                    false-value="No">
                    Reagen
                </b-checkbox>
            </div>                      
            <div class="field">
                <b-checkbox v-model="form.jenis_alkes_kalibrator"
                    true-value="Yes"
                    false-value="No">
                    Kalibrator
                </b-checkbox>
            </div>                      
            <div class="field">
                <b-checkbox v-model="form.jenis_alkes_bahan_kontrol"
                    true-value="Yes"
                    false-value="No">
                    Bahan Kontrol
                </b-checkbox>
            </div>  

            <p style="font-weight: bold;">Nomor Izin Edar Alkes Yang Dimiliki (Sebagai Pemegang Izin Edar)</p>            
            <b-select v-model="form.no_izin_edar_alkes_yang_dimiliki_sebagai_pemegang_izin_edar" placeholder="Pilihan" expanded>
                <option value="Ada">Ada</option>
                <option value="Tidak Ada">Tidak Ada</option>
                <option value="Belum Semua">Belum Semua</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Nomor Izin Edar Alkes Yang Dimiliki (Bukan Sebagai Pemegang Izin Edar)</p>            
            <b-select v-model="form.no_izin_edar_alkes_yang_dimiliki_bukan_sebagai_pemegang_izin_edar" placeholder="Pilihan" expanded>
                <option value="Ada">Ada</option>
                <option value="Tidak Ada">Tidak Ada</option>
                <option value="Belum Semua">Belum Semua</option>
            </b-select>  
            <br />
            <p style="font-weight: bold;">Masih Melakukan Aktivitas Penyaluran Produk</p>            
            <b-select v-model="form.masih_melakukan_aktifitas_penyaluran_produk" placeholder="Pilihan" expanded>
                <option value="Ada">Ada</option>
                <option value="Tidak Ada">Tidak Ada</option>
                <option value="Tidak Semua">Tidak Semua</option>
            </b-select>       

            <br />
            <p style="font-weight: bold;">III. DATA KARYAWAN</p>                         
            <p style="font-weight: bold;">Jumlah Karyawan</p>   
            <br />
            <b-field label="Laki-laki">
                <b-input size="is-medium" type="text" v-model="form.data_karyawan_laki" placeholder=""></b-input>
            </b-field>                                  
            <b-field label="Perempuan">
                <b-input size="is-medium" type="text" v-model="form.data_karyawan_wanita" placeholder=""></b-input>
            </b-field>  

            <br />                                            
            <p style="font-weight: bold;">PENANGGUNG JAWAB TEKNIS</p>   
            <br />  
            <b-field label="Nama">
                <b-input size="is-medium" type="text" v-model="form.data_karyawan_penanggung_jawab_teknis" placeholder=""></b-input>
            </b-field>    
            <p style="font-weight: bold;">Bekerja Full Time</p>            
            <b-select v-model="form.data_karyawan_bekerja_fulltime" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
                <option value="Lainnya">Lainnya</option>
            </b-select>         
            <b-field label="Pilihan Lainnya? Jika ada.">
                <b-input size="is-medium" type="text" v-model="form.data_karyawan_bekerja_fulltime_lainnya" placeholder=""></b-input>
            </b-field>
            <b-field label="Pendidikan (Minimal D3)">
                <b-input size="is-medium" type="text" v-model="form.data_karyawan_pendidikan" placeholder=""></b-input>
            </b-field>  
            <br />
            <p style="font-weight: bold;">Tenaga Teknisi (Khusus PAK yang menyalurkan Alkes Elektromedik dan Instrumen Produk IVD)</p>            
            <b-select v-model="form.data_karyawan_tenaga_teknis" placeholder="Pilihan" expanded>
                <option value="Ada">Ada</option>
                <option value="Tidak">Tidak</option>
            </b-select>                                                                                              

            <br />
            <!-- <b-button type="is-primary is-large" @click="submitProses" expanded>Proses</b-button> -->             
            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="saveDraft();" expanded>Save Draft</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); page3 = true" expanded>Next</b-button>
                </div>
            </div>              

        </section>

        <section v-if="page3" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <p style="color: black; font-weight: bold;">I. SISTEM MANAJEMEN MUTU</p>
            <p style="color: black; font-weight: bold;">PERSYARATAN UMUM</p>
            <br />
            <p style="font-weight: bold;">Memiliki Bagan Struktur Organisasi</p>            
            <b-select v-model="form.memiliki_bagan_struktur_organisasi" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br /> 
            <p style="font-weight: bold;">Memiliki Uraian Tugas Dan Tanggung Jawab Tertulis Sesuai Struktur Organisasi</p>            
            <b-select v-model="form.memiliki_uraian_tugas_dan_tanggung_jawab_tertulis_sesuai_struktur_organisasi" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br /> 
            <p style="font-weight: bold;">Memiliki Pedoman Mutu</p>            
            <b-select v-model="form.memiliki_pedoman_mutu" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br /> 
            <p style="font-weight: bold; background-color: orange; padding: 0.5em 1em;">Persyaratan Dokumentasi Pasif</p><br /> 
            <p style="font-weight: bold;">Tersedia Prosedur Tertulis Pengadaan Barang/Produk</p>            
            <b-select v-model="form.persyaratan_dokumentasi_pasif_1" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                     
            <br /> 
            <p style="font-weight: bold;">Tersedia Prosedur Tertulis Penerimaan Produk</p>            
            <b-select v-model="form.persyaratan_dokumentasi_pasif_2" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                     
            <br /> 
            <p style="font-weight: bold;">Tersedia Prosedur Tertulis Penerimaan Dengan Sistem Rantai Dingin Untuk Alkes Diagnostik In Vitro Yang Membutuhkan Suhu Refrigerator/Cold Place/Freezer/Deep Freezer</p>            
            <b-select v-model="form.persyaratan_dokumentasi_pasif_3" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                     
            <br /> 
            <p style="font-weight: bold;">Tersedia Prosedur Tertulis Penyimpanan Produk</p>            
            <b-select v-model="form.persyaratan_dokumentasi_pasif_4" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                     
            <br /> 
            <p style="font-weight: bold;">Tersedia Prosedur Tertulis Penyimpanan Dengan Sistem Rantai Dingin Untuk Alkes Diagnostik In Vitro Yang Membutuhkan Suhu Refrigerator/Cold Place/Freezer/Deep Freezer</p>            
            <b-select v-model="form.persyaratan_dokumentasi_pasif_5" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                     
            <br /> 
            <p style="font-weight: bold;">Tersedia Prosedur Tertulis Pengiriman Produk</p>            
            <b-select v-model="form.persyaratan_dokumentasi_pasif_6" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                     
            <br /> 
            <p style="font-weight: bold;">Tersedia Prosedur Tertulis Pengiriman (Termasuk Proses Pengemasan) Dengan Rantai Dingin Untuk Alkes Diagnostik In Vitro Yang Membutuhkan Suhu Refrigerator/Cold Place/Freezer/Deep Freezer</p>            
            <b-select v-model="form.persyaratan_dokumentasi_pasif_7" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                     
            <br /> 
            <p style="font-weight: bold;">Tersedia Prosedur Penyerahan Dengan Rantai Dingin Untuk Alkes Diagnostik In Vitro Dengan Suhu Refrigerator/Cold Place/Freezer/Deep Freezer</p>            
            <b-select v-model="form.persyaratan_dokumentasi_pasif_8" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                     
            <br /> 
            <p style="font-weight: bold;">Tersedia Prosedur Tertulis Penanganan Produk Bila Listrik Padam Untuk Alkes Diagnostik In Vitro Dengan Suhu Refrigerator/Cold Place/Freezer/Deep Freezer</p>            
            <b-select v-model="form.persyaratan_dokumentasi_pasif_9" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>  
            <br />                   
            <p style="font-weight: bold;">Tersedia Prosedur Penyerahan (Termasuk Instalasi, Commissioning (Uji Fungsi, Uji Keselamatan, Uji Coba/Aplikasi Dan Pelatihan) Untuk Alat Kesehatan Elektromedik Dan/Atau Instrumen Diagnostik In Vitro</p>            
            <b-select v-model="form.persyaratan_dokumentasi_pasif_10" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                     
            <br />                   
            <p style="font-weight: bold;">Tersedia Prosedur Layanan Purna Jual Untuk Untuk Alat Kesehatan Elektromedik Dan/Atau Instrument Diagnostik In Vitro</p>            
            <b-select v-model="form.persyaratan_dokumentasi_pasif_11" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                     
            <br />                   
            <p style="font-weight: bold;">Tersedia Prosedur Tertulis Penanganan Keluhan</p>            
            <b-select v-model="form.persyaratan_dokumentasi_pasif_12" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                     
            <br />                   
            <p style="font-weight: bold;">Tersedia Prosedur Tertulis Field Safety Corrective Action (Fsca)</p>            
            <b-select v-model="form.persyaratan_dokumentasi_pasif_13" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                     
            <br />                   
            <p style="font-weight: bold;">Tersedia Prosedur Tertulis Retur Produk</p>            
            <b-select v-model="form.persyaratan_dokumentasi_pasif_14" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                     
            <br />                   
            <p style="font-weight: bold;">Tersedia Prosedur Tertulis Pemusnahan Produk</p>            
            <b-select v-model="form.persyaratan_dokumentasi_pasif_15" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                     
            <br />                   
            <p style="font-weight: bold;">Tersedia Prosedur Tertulis Pengendalian Dokumen Mutu</p>            
            <b-select v-model="form.persyaratan_dokumentasi_pasif_16" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                     
            <br />                   
            <p style="font-weight: bold;">Tersedia Prosedur Tertulis Audit Internal</p>            
            <b-select v-model="form.persyaratan_dokumentasi_pasif_17" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                     
            <br />                   
            <p style="font-weight: bold;">Tersedia Prosedur Tertulis Kajian/Tinjauan Manajemen</p>            
            <b-select v-model="form.persyaratan_dokumentasi_pasif_18" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                     
            <br />                   
            <p style="font-weight: bold;">Tersedia Prosedur Tertulis Seleksi Pihak Ketiga</p>            
            <b-select v-model="form.persyaratan_dokumentasi_pasif_19" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                     
            <br />    
            <p style="font-weight: bold; background-color: orange; padding: 0.5em 1em;">PERSYARATAN DOKUMENTASI AKTIF</p>               
            <br /> 
            <p style="font-weight: bold;">Tersedia Surat Pemesanan</p>            
            <b-select v-model="form.persyaratan_dokumentasi_aktif_1" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                 
            <br /> 
            <p style="font-weight: bold;">Tersedia Catatan Stok Barang</p>            
            <b-select v-model="form.persyaratan_dokumentasi_aktif_2" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                 
            <br /> 
            <p style="font-weight: bold;">Tersedia Faktur Penjualan</p>            
            <b-select v-model="form.persyaratan_dokumentasi_aktif_3" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                 
            <br /> 
            <p style="font-weight: bold;">Tersedia Surat Jalan/Faktur Pengiriman Barang</p>            
            <b-select v-model="form.persyaratan_dokumentasi_aktif_4" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                 
            <br /> 
            <p style="font-weight: bold;">Memiliki Daftar Buku Kepustakaan Tentang Alat Kesehatan</p>            
            <b-select v-model="form.persyaratan_dokumentasi_aktif_5" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                 
            <br /> 
            <p style="font-weight: bold;">Tersedia Laporan Kegiatan Penyaluran</p>            
            <b-select v-model="form.persyaratan_dokumentasi_aktif_6" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                 
            <br /> 
            <p style="font-weight: bold;">Laporan Kegiatan Penyaluran Disampaikan Ke Kementerian Kesehatan Melalui E-Report</p>            
            <b-select v-model="form.persyaratan_dokumentasi_aktif_7" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                 
            <br /> 
            <p style="font-weight: bold;">Tersedia Laporan Kejadian Tidak Diinginkan (Ktd)</p>            
            <b-select v-model="form.persyaratan_dokumentasi_aktif_8" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                 
            <br /> 
            <p style="font-weight: bold;">Tersedia Laporan Penarikan Produk</p>            
            <b-select v-model="form.persyaratan_dokumentasi_aktif_9" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                 
            <br /> 
            <p style="font-weight: bold;">Tersedia Laporan Pemusnahan Produk</p>            
            <b-select v-model="form.persyaratan_dokumentasi_aktif_10" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                 
            <br /> 

            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); page2 = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); page4 = true" expanded>Next</b-button>
                </div>
            </div>                                   

        </section> 
        <section v-if="page4" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <p style="font-weight: bold;">II. Pengelolaan Sumber Daya</p>
            <p style="font-weight: bold;">Personalia dan Pelatihan</p>
            <br />
            <br /> 
            <p style="font-weight: bold;">Penanggung Jawab Teknis Memiliki Kompetensi Sesuai Dengan Produk Alat Kesehatan Yang Tercantum Pada IPAK</p>            
            <b-select v-model="form.personalia_dan_pelatihan_1" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br /> 
            <p style="font-weight: bold;">Memiliki Sistem Penerimaan SDM (Rekruitmen)</p>            
            <b-select v-model="form.personalia_dan_pelatihan_2" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br /> 
            <p style="font-weight: bold;">Dilakukan Pemeriksaan Kesehatan Terhadap Karyawan</p>            
            <b-select v-model="form.personalia_dan_pelatihan_3" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br /> 
            <p style="font-weight: bold;">Personil Yang Terlibat Dalam Kegiatan Distribusi Mengenakan Atribut Pengaman Yang Sesuai Dengan Sifat Produk Dan Kegiatannya</p>            
            <b-select v-model="form.personalia_dan_pelatihan_4" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br /> 
            <p style="font-weight: bold;">Personil Melaksanakan Prosedur Terkait Hygiene</p>            
            <b-select v-model="form.personalia_dan_pelatihan_5" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br /> 
            <p style="font-weight: bold;">Personil Yang Mendapatkan Sosialisasi Tentang Standar Operasioanal Prosedur</p>            
            <b-select v-model="form.personalia_dan_pelatihan_6" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br /> 
            <p style="font-weight: bold;">Adanya Personil Yang Mendapatkan Pelatihan Cara Distribusi Alat Kesehatan Yang Baik</p>            
            <b-select v-model="form.personalia_dan_pelatihan_7" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br /> 
            <p style="font-weight: bold;">Adanya Personil Yang Mendapatkan Pelatihan Pengelolaan Rantai Dingin Untuk Alkes Diagnostik In Vitro Yang Membutuhkan Suhu Refrigerator/Cold Place/Freezer/Deep Freezer</p>            
            <b-select v-model="form.personalia_dan_pelatihan_8" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br /> 
            <p style="font-weight: bold;">Memiliki Personil Yang Mendapatkan Pelatihan Terkait Instalasi/Commisioning/Pemeliharaan/Perbaikan Untuk Alat Kesehatan Elektromedik Dan/Atau Instrument Diagnostik In Vitro</p>            
            <b-select v-model="form.personalia_dan_pelatihan_9" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br /> 
            <p style="font-weight: bold;">Adanya Personil Yang Mendapatkan Pelatihan Masalah Keselamatan Kerja</p>            
            <b-select v-model="form.personalia_dan_pelatihan_10" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br /> 
            <p style="font-weight: bold;">Tersedia Catatan Perencanaan Pelatihan Bagi Personil</p>            
            <b-select v-model="form.personalia_dan_pelatihan_11" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br /> 
            <p style="font-weight: bold;">Tersedia Catatan Pelatihan Personil</p>            
            <b-select v-model="form.personalia_dan_pelatihan_12" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br /> 

            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); page3 = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); page5 = true" expanded>Next</b-button>
                </div>
            </div>                                   

        </section> 
        <section v-if="page5" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <br />
            <p style="font-weight: bold;">III. BANGUNGAN DAN FASILITAS</p>
            <br />
            <p style="font-weight: bold;">Bangunan Dapat Melindungi Produk Dari Kontaminasi Dan Kerusakan, Termasuk Perlindungan Dari Panas Berlebihan Dan/Atau Terpapar Sinar Matahari, Terlindungi Dari Binatang, Vektor Penyakit Seperti Tikus, Serangga Dan Jamur</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_1" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Area Penerimaan Yang Memadai</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_2" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Ruang Penyimpanan Sesuai Dengan Kapasitas Produk Yang Disimpan Dan Sesuai Dengan Kondisi Yang Dibutuhkan Produk</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_3" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Ruang Penyimpanan Sesuai Dengan Kondisi Lingkungan Yang Dibutuhkan Produk</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_4" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Area/Ruangan Untuk Menyimpan Produk Kadaluarsa/Rusak/Recall/Retur/Ilegal</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_5" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Area Pengiriman Yang Memadai</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_6" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Sirkulasi Udara Yang Memadai</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_7" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedianya Alat Untuk Mengukur Dan Memonitor Suhu</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_8" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Alat Untuk Mengukur Dan Memonitor Kelembaban</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_9" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Palet/Rak Yang Bersih Dan Dirawat Dengan Baik</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_10" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Program Kontrol Hama</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_11" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Alat Pemadam Kebakaran (Apar/Hydran/Sprinkle) Dengan Kondisi Yang Baik</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_12" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Alat Pemadam Kebakaran Dengan Jumlahnya Sesuai Dengan Luas Ruangan</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_13" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Alat Bantu Angkut Barang Atau Peralatan Gudang Lain Dengan Sumber Penggerak Bensin, Diesel, Gas, Tidak Dioperasikan Di Dalam Gudang</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_14" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Instalasi Listrik Yang Aman</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_15" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Sumber Air Bersih Yang Memadai</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_16" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Tanda Arah Evakuasi</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_17" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Tanda Titik Kumpul</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_18" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            

            <br /> 
            <p style="font-weight: bold;">Tersedia Fasilitas Sistem Rantai Dingin Untuk Alkes Diagnostik In Vitro Yang Membutuhkan Suhu Refrigerator Cold Place / Freeze / Deep Freezer</p>
            <br /> 
            <br />
            <p style="font-weight: bold;">Tersedia Ruang/Tempat/Area Penerimaan Dan Pengiriman Dengan Suhu Dingin/Sejuk ((8℃ S/D 15°C)</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_1_1" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>               
            <br />
            <p style="font-weight: bold;">Tersedia Ruang/Tempat/Area Karantina Dengan Suhu Refrigerator/Cold Place/Freezer/Deep Freezer Untuk Menyimpan Alkes Diagnostik In Vitro Yang Tidak Memenuhi Syarat Dan Masih Menunggu Keputusan Tindak Lanjut</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_1_2" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>               
            <br />
            <p style="font-weight: bold;">Tersedia Tempat Penyimpanan Khusus (Lemari Pendingin/Cold Storage/Cold Room/Freezer) Dalam Kondisi Dirawat Dengan Baik</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_1_3" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>               
            <br />
            <p style="font-weight: bold;">Tersedia Thermometer Khusus Suhu Dingin</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_1_4" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>               
            <br />
            <p style="font-weight: bold;">Tersedia Cold Box Yang Dilapisi Bahan Yang Mampu Menjaga Stabilitas Suhu Selama Transportasi</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_1_5" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>               
            <br />
            <p style="font-weight: bold;">Tersedia Cool Pack/Ice/Pack/Dry Ice Untuk Pengemasan/Pengiriman Alkes Diagnostik In Vitro</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_1_6" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>               
            <br />
            <p style="font-weight: bold;">Tersedia Alat Untuk Memantau Suhu Selama Transportasi (Thermal Indicator Strip Atau Data Logger Atau Thermometer Digital Atau Lainnya)</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_1_7" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>               
            <br />
            <p style="font-weight: bold;">Tersedia Generator Yang Masih Berfungsi Dengan Baik</p>            
            <b-select v-model="form.bangungan_dan_fasilitas_1_8" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Kebersihan</p>              
            <br />
            <br />
            <p style="font-weight: bold;">Semua Ruangan Kering, Bersih, Bebas Limbah/Sampah Debu</p>            
            <b-select v-model="form.kebersihan_1" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Catatan Pemeliharaan/Pembersihan Ruang Penyimpanan</p>            
            <b-select v-model="form.kebersihan_2" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Ada Larangan Makan/Minum/Merokok Di Area Penyimpanan</p>            
            <b-select v-model="form.kebersihan_3" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Toilet/Wastafel Yang Terpisah Dari Ruang Penyimpanan</p>            
            <b-select v-model="form.kebersihan_4" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Bengkel/Workshop (Khusus Untuk Alat Kesehatan Elektromedik Dan Instrumen Diagnostik In Vitro) </p>
            <br />
            <br />
            <p style="font-weight: bold;">Tersedia Bengkel/Workshop Yang Memadai</p>            
            <b-select v-model="form.bengkel_1" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>             
            <br />
            <p style="font-weight: bold;">Tersedia Surat Kerjasama Bengkel/Workshop (Jika Kerjasama Dengan Pihak Lain)</p>            
            <b-select v-model="form.bengkel_2" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>             
            <br />
            <p style="font-weight: bold;">Tersedia Perlengkapan Bengkel (Sesuai Alkes Yang Disalurkan)</p>            
            <b-select v-model="form.bengkel_3" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>             
            <br />
            <p style="font-weight: bold;">Tersedia Suku Cadang (Sesuai Alkes Yang Disalurkan)</p>            
            <b-select v-model="form.bengkel_4" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>             
            <br />

            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); page4 = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); page6 = true" expanded>Next</b-button>
                </div>
            </div>                                   

        </section> 

        <section v-if="page6" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <br />
            <p style="font-weight: bold;">IV. Penyimpanan Dan Penanganan Persediaan</p>
            <p style="font-weight: bold;">Penerimaan</p>
            <br />
            <p style="font-weight: bold;">Prosedur Penerimaan Produk Dilakukan Di Area/Tempat Yang Sesuai Dengan Kapasitas/Kondisi Produk</p>            
            <b-select v-model="form.data_page6_1" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Melaksanakan Pemeriksaan Kesesuaian Produk Yang Diterima, Minimal Meliputi (Nama Produk, Nama Produsen/Asal Barang, Nomor Izin Edar , Jumlah , Kondisi Fisik Kemasan/Produk, Keterangan Pada Label: Jangka Waktu Kedaluwarsa, Nomor Bets/Tipe/Seri)</p>            
            <b-select v-model="form.data_page6_2" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Produk Yang Diterima Dalam Kondisi Tidak Memenuhi Syarat Dipisah Dengan Produk Yang Diterima Dalam Kondisi Baik.</p>            
            <b-select v-model="form.data_page6_3" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Catatan (Faktur/Surat Pengantar Barang/Dokumen Lain) Yang Menyatakan Produk Diterima Dalam Kondisi Baik)</p>            
            <b-select v-model="form.data_page6_4" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold; background-color: orange;">Melakukan Prosedur Penerimaan Dengan Rantai Dingin Untuk Alkes Diagnostik In Vitro Yang Membutuhkan Suhu Refrigerator / Cold Room / Freezer / Deep Freezer</p>            
            <br />
            <br />
            <p style="font-weight: bold;">Prosedur Penerimaan Alat Kesehatan Diagnostik In Vitro Dilakukan Di Area/Tempat Dengan Suhu Dingin/Sejuk (8℃ S/D 15°C)</p>            
            <b-select v-model="form.data_page6_5" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                        
            <br />
            <p style="font-weight: bold;">Melakukan Pengukuran Suhu Alat Kesehatan Diagnostik In Vitro Yang Diterima</p>            
            <b-select v-model="form.data_page6_6" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                        
            <br />
            <p style="font-weight: bold;">Tersedia Catatan Kondisi Suhu Alat Kesehatan Diagnostik In Vitro Yang Diterima</p>            
            <b-select v-model="form.data_page6_7" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Penyimpanan</p>            
            <br />
            <p style="font-weight: bold;">Produk Disimpan Sesuai Dengan Kondisi Yang Dibutuhkan Alat Kesehatan Untuk Tetap Terjamin Keamanan, Mutu Dan Manfaatnya.</p>            
            <b-select v-model="form.data_page6_8" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Penataan Produk Sesuai Kelompok Alat Kesehatan</p>            
            <b-select v-model="form.data_page6_9" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Produk Tidak Diletakkan Langsung Diatas Lantai</p>            
            <b-select v-model="form.data_page6_10" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Melakukan Pencatatan Stock Produk Secara Tertib</p>            
            <b-select v-model="form.data_page6_11" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Produk Yang Telah Kedaluwarsa/Rusak Disimpan Terpisah Dengan Produk Yang Masih Layak Pakai Dan Dilengkapi Dengan Penandaan</p>            
            <b-select v-model="form.data_page6_12" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Melaksanakan Mekanisme Fefo/Fifo (First Expire First Out/ First In First Out)</p>            
            <b-select v-model="form.data_page6_13" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Catatan Kalibrasi Peralatan Yang Mendukung Proses Penyimpanan</p>            
            <b-select v-model="form.data_page6_14" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Catatan Kegiatan Kontrol Hama</p>            
            <b-select v-model="form.data_page6_15" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Catatan Kontrol Suhu Dan Kelembaban</p>            
            <b-select v-model="form.data_page6_16" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Produk Yang Disimpan Memiliki Penandaan/Labelling Alkes Lengkap (Nama Produk, Type/Model, Nomor Batch/Lot/Seri, Tanggal Kadaluarsa, Nomor Izin Edar, Nama Pabrik, Alamat Pabrik, Nama Penyalur , Alamat Penyalur, Spesifikasi Alat/Kegunaan/Cara Penggunaan, Tanda Peringatan/Perhatian (Contoh Produk Secara Acak /Sample)</p>            
            <b-select v-model="form.data_page6_17" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold; background-color: orange;">Melakukan Prosedur Penyimpanan Dengan Rantai Dingin Untuk Alkes Diagnostik In Vitro Yang Membutuhkan Suhu Refrigerator / Cold Room / Freezer / Deep Freezer</p>
            <br />
            <p style="font-weight: bold;">Alkes Diagnostik In Vitro Disimpan Dalam Lemari Pendingin/Cold Storage/Freezer Yang Dirawat Dengan Baik</p>            
            <b-select v-model="form.data_page6_18" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Catatan Kontrol Suhu Lemari Pendingin/Cold Storage/Freezer</p>            
            <b-select v-model="form.data_page6_19" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Melakukan Pemetaan Suhu</p>            
            <b-select v-model="form.data_page6_20" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Catatan Pemetaan Suhu</p>            
            <b-select v-model="form.data_page6_21" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Melaksanakan Prosedur Penanganan Alkes Diagnostik In Vitro Apabila Listrik Padam</p>            
            <b-select v-model="form.data_page6_22" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>  
            <br />
            <p style="font-weight: bold; background-color: orange;">Pengiriman dan Penyerahan </p>  
            <br />
            <p style="font-weight: bold;">Prosedur Pengiriman Produk Dilakukan Di Area/Tempat Yang Sesuai Dengan Kapasitas/Kondisi Produk</p>            
            <b-select v-model="form.data_page6_23" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                    
            <br />
            <p style="font-weight: bold;">Melaksanakan Pemeriksaan Produk Yang Akan Dikirim, Minimal Meliputi (Nama Produk, Nama Produsen/Asal Barang, Nomor Izin Edar, Jumlah , Kondisi Fisik Kemasan/Produk, Keterangan Pada Label: Jangka Waktu Kedaluwarsa, Nomor Bets/Tipe/Seri.</p>            
            <b-select v-model="form.data_page6_24" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                    
            <br />
            <p style="font-weight: bold;">Melakukan Pemeriksaan Alat Transportasi Untuk Memastikan Kesesuaian Kapasitas Dan Persyaratan Dari Produk.</p>            
            <b-select v-model="form.data_page6_25" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold; background-color: orange;">Melakukan Prosedur Pengiriman Dan Penyerahan Dengan Sistem Rantai Dingin Untuk Alkes Diagnostik In Vitro Yang Membutuhkan Suhu Refrigerator / Cold Room / Freezer / Deep Freezer</p>  
            <br />
            <p style="font-weight: bold;">Persiapan Pengiriman Dilakukan Di Area Pengiriman Dengan Suhu Dingin/Sejuk (8℃ S/D 15°C)</p>            
            <b-select v-model="form.data_page6_26" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                             
            <br />
            <p style="font-weight: bold;">Alkes Diagnostik In Vitro Dikemas Dengan Menggunakan Packaging Material (Cold Box Dan Cold Pack) Yang Tervalidasi</p>            
            <b-select v-model="form.data_page6_27" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                             
            <br />
            <p style="font-weight: bold;">Melakukan Pengukuran Suhu Cold Box Sebelum Dikirim</p>            
            <b-select v-model="form.data_page6_28" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                             
            <br />
            <p style="font-weight: bold;">Tersedia Catatan Kondisi Suhu Cold Box Yang Dikirim</p>            
            <b-select v-model="form.data_page6_29" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                             
            <br />
            <p style="font-weight: bold;">Melakukan Pengukuran Suhu Cold Box Pada Saat Penyerahan Alkes Diagnostik In Vitro Kepada Konsumen</p>            
            <b-select v-model="form.data_page6_30" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                             
            <br />
            <p style="font-weight: bold;">Tersedia Catatan Kondisi Suhu Cold Box Yang Diterima Konsumen</p>            
            <b-select v-model="form.data_page6_31" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold; background-color: orange;">Instalasi, Commisioning Dan Pelayanan Purna Jual Untuk Alkes Elektromedik Dan/Atau Instrumen Diagnostik In Vitro</p>
            <br />
            <p style="font-weight: bold;">Melaksanakan Prosedur Instalasi/Pemasangan Sesuai Dengan Petunjuk/Prosedur Pemasangan Dari Pabrik</p>            
            <b-select v-model="form.data_page6_32" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                                        
            <br />
            <p style="font-weight: bold;">Melaksanakan Commissioning (Pemeriksaan Fisik Setalah Instalasi Dan Pengujian (Uji Fungsi/Uji Keselamatan/Aplikasi)</p>            
            <b-select v-model="form.data_page6_33" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                                        
            <br />
            <p style="font-weight: bold;">Tersedia Catatan/Dokumentasi Pelaksanaan Instalasi Dan Commissioning</p>            
            <b-select v-model="form.data_page6_34" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                                        
            <br />
            <p style="font-weight: bold;">Melaksanakan Pelatihan Bagi Tenaga Operator/ Tenaga Teknis Fasilitas Pelayanan Kesehatan.</p>            
            <b-select v-model="form.data_page6_35" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                                        
            <br />
            <p style="font-weight: bold;">Tersedia Catatan/Dokumentasi Kegiatan Pelatihan Bagi Tenaga Operator/ Tenaga Teknis Fasilitas Pelayanan Kesehatan</p>            
            <b-select v-model="form.data_page6_36" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                                        
            <br />
            <p style="font-weight: bold;">Memiliki Dokumen Informasi Yang Mencakup Identitas Dan Spesifikasi Produk, Prosedur, Buku Petunjuk Pemasangan, Penggunaan Dan Pemeliharaan Atau Media Pendukung Lainnya Yang Menggunakan Bahasa Indonesia</p>            
            <b-select v-model="form.data_page6_37" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                                        
            <br />
            <p style="font-weight: bold;">Melaksanakan Layanan Purna Jual (Perbaikan/Pemeliharaan Alkes)</p>            
            <b-select v-model="form.data_page6_38" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                                        
            <br />
            <p style="font-weight: bold;">Tersedia Catatan/Dokumentasi Layanan Purna Jual</p>            
            <b-select v-model="form.data_page6_39" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                                        
            <br />
            <p style="font-weight: bold;">Dokumen Kegiatan Layanan Purna Jual Terpelihara Dengan Baik</p>            
            <b-select v-model="form.data_page6_40" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                                        

            <br /> 

            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); page5 = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); page7 = true" expanded>Next</b-button>
                </div>
            </div>                                   

        </section>
        <section v-if="page7" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <br />
            <p style="font-weight: bold; background-color: orange;">V. Mampu Telusur Produk (Traceability)</p>
            <br />
            <p style="font-weight: bold;">Memiliki Pencatatan Lengkap Terkait Alkes Yang Diterima, Meliputi Nama Pabrik/Principle/Pemegang Izin Edar, Nomor Bets/Nomor Seri, Tipe, Jumlah Dan Nomor Izin Edar Dan Data Kesesuaian Produk</p>            
            <b-select v-model="form.data_page7_1" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>             
            <br />
            <p style="font-weight: bold;">Memiliki Pencatatan Lengkap Terkait Alkes Yang Dikirim, Meliputi Nama Konsumen, Alamat, Tanggal Beserta Jadwal Pengiriman, Nama Penerima Dan Pengirim Dan Data Kesesuaian Produk</p>            
            <b-select v-model="form.data_page7_2" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>             
            <br />
            <p style="font-weight: bold;">PAKYang Menyalurkan Produk Alkes Khusus (Misalnya Katup Jantung Mekanik, Paju Jantung Implant, Stent Jantung, Dll), Memiliki Pencatatan Data Fasyankes Dan Data Pasien Lengkap</p>            
            <b-select v-model="form.data_page7_3" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold; background-color: orange;">VI. Penanganan Keluhan</p>
            <br />
            <p style="font-weight: bold;">Melaksanakan Mekanisme Pengumpulan Komentar Atau Keluhan Dari Pengguna</p>            
            <b-select v-model="form.data_page7_4" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                         
            <br />
            <p style="font-weight: bold;">Tersedia Catatan Data Keluhan Pelanggan, Minimal Meliputi Nama Pelanggan, Tanggal/Bulan/Tahun, Alamat, Data Keluhan, Dan Lain-Lain</p>            
            <b-select v-model="form.data_page7_5" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                         
            <br />
            <p style="font-weight: bold;">Tersedia Catatan Tindak Lanjut Korektif Terhadap Penanganan Keluhan Pelanggan</p>            
            <b-select v-model="form.data_page7_6" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                         
            <br />
            <p style="font-weight: bold;">Dokumen Kegiatan Penanganan Keluhan Terpelihara Dengan Baik</p>            
            <b-select v-model="form.data_page7_7" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold; background-color: orange;">VII. Tindakan Perbaikan Keamanan Di Lapangan (FSCA)</p>
            <br />
            <p style="font-weight: bold;">Melakukan Prosedur Kegiatan FSCA</p>            
            <b-select v-model="form.data_page7_8" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                                    
            <br />
            <p style="font-weight: bold;">Tersedia Dokumen Laporan Perencanaan, Pelaksanaan Dan Tindakan Fsca Yang Dilakukan.</p>            
            <b-select v-model="form.data_page7_9" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                                    
            <br />
            <p style="font-weight: bold;">Laporan FSCA Dikirim Ke Kementerian Kesehatan</p>            
            <b-select v-model="form.data_page7_10" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                                    
            <br />
            <p style="font-weight: bold;">Produk Recall Disimpan Terpisah Dengan Produk Yang Masih Layak Pakai/Kondisi Baik</p>            
            <b-select v-model="form.data_page7_11" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                                    
            <br />
            <p style="font-weight: bold;">Tersedia Catatan Data Penarikan Produk (Recall)</p>            
            <b-select v-model="form.data_page7_12" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                                    
            <br />
            <p style="font-weight: bold;">Dokumen Kegiatan Fsca Terpelihara Dengan Baik</p>            
            <b-select v-model="form.data_page7_13" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold; background-color: orange;">VIII. Pengembalian / Retur Alat Kesehatan</p>
            <br />
            <p style="font-weight: bold;">Produk Retur Disimpan Terpisah Dengan Produk Yang Masih Layak Pakai/Kondisi Baik</p>            
            <b-select v-model="form.data_page7_14" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Catatan Data Produk Kembalian (Retur)</p>            
            <b-select v-model="form.data_page7_15" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />

            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); page6 = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); page8 = true" expanded>Next</b-button>
                </div>
            </div>                                   

        </section>
        <section v-if="page8" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <br />
            <p style="font-weight: bold; background-color: orange;">IX. Pemusnahan Alat Kehatan</p>
            <br /> 
            <p style="font-weight: bold;">Produk Yang Akan Dimusnahkan Ditempatkan Terpisah Dengan Produk Yang Masih Layak Pakai/Kondisi Baik</p>            
            <b-select v-model="form.data_page8_1" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br /> 
            <p style="font-weight: bold;">Tersedian Catatan Data Produk Yang Dimusnahkan</p>            
            <b-select v-model="form.data_page8_2" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br /> 
            <p style="font-weight: bold;">Tersedia Bap Kegiatan Pemusnahan, Dilengkapi Saksi Dari Instansi Yang Berwenang</p>            
            <b-select v-model="form.data_page8_3" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br /> 
            <p style="font-weight: bold;">Ada Laporan Ke Instansi Yang Berwenang Terkait Pemusnahan</p>            
            <b-select v-model="form.data_page8_4" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br /> 
            <p style="font-weight: bold;">Dokumen Kegiatan Pemusnahan Terpelihara Dengan Baik</p>            
            <b-select v-model="form.data_page8_5" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold; background-color: orange;">X. Alat Kesehatan Ilegal Dan Tidak Memenuhi Persyaratan</p>
            <br /> 
            <p style="font-weight: bold;">Produk Illegal Dan Tms Ditempatkan Terpisah Dengan Produk Yang Masih Layak Pakai/Kondisi Baik</p>            
            <b-select v-model="form.data_page8_6" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                        
            <br /> 
            <p style="font-weight: bold;">Tersedia BAP Terkait Temuan Produk Illegal dan TMS</p>            
            <b-select v-model="form.data_page8_7" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br /> 
            <p style="font-weight: bold;">Ada Laporan Ke Instansi Yang Berwenang Terkait Temuan Produk Illegal Dan TMS</p>            
            <b-select v-model="form.data_page8_8" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold; background-color: orange;">XI. Audit Internal</p>
            <br />
            <br /> 
            <p style="font-weight: bold;">Memiliki Tim Audit Internal</p>            
            <b-select v-model="form.data_page8_9" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br /> 
            <p style="font-weight: bold;">Tersedia Jadwal Pelaksanaan Audit Internal Yang Ditandatangani Pimpinan Perusahaan</p>            
            <b-select v-model="form.data_page8_10" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br /> 
            <p style="font-weight: bold;">Tersedia Catatan/Laporan Kegiatan Audit Internal</p>            
            <b-select v-model="form.data_page8_11" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br /> 
            <p style="font-weight: bold;">Tersedia Catatan/Laporan Tindak Lanjut Audit Internal</p>            
            <b-select v-model="form.data_page8_12" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br /> 
            <p style="font-weight: bold;">Dokumen Kegiatan Audit Internal Terpelihara Dengan Baik</p>            
            <b-select v-model="form.data_page8_13" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold; background-color: orange;">XII. Kajian Manajemen</p>
            <br /> 
            <p style="font-weight: bold;">Tersedia Jadwal Pelaksanaan Tinjauan Manajemen</p>            
            <b-select v-model="form.data_page8_14" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br /> 
            <p style="font-weight: bold;">Tersedia Catatan/Laporan Kegiatan Tinjauan Manajemen </p>            
            <b-select v-model="form.data_page8_15" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br /> 
            <p style="font-weight: bold;">Tersedia Catatan/Laporan Tindak Lanjut Tinjauan Manajemen </p>            
            <b-select v-model="form.data_page8_16" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br /> 
            <p style="font-weight: bold;">Dokumen Kegiatan Tinjauan Manajemen Terpelihara Dengan Baik</p>            
            <b-select v-model="form.data_page8_17" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold; background-color: orange;">XIII. Aktivitas Pihak Ketiga (Outsourcing Activity)</p>
            <br /> 
            <p style="font-weight: bold;">Melaksanakan Seleksi Terhadap Pihak Ketiga (Misalnya Untuk Kegiatan Transportasi/Pengiriman, Bengkel/Workshop, Kontrol Hama, Dll)</p>            
            <b-select v-model="form.data_page8_18" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br /> 
            <p style="font-weight: bold;">Tersedia Catatan Hasil Seleksi Pihak Ketiga</p>            
            <b-select v-model="form.data_page8_19" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br /> 
            <p style="font-weight: bold;">Tersedia Mou/Kontrak Kerjasama Yang Jelas Antara Pihak Ketiga Dengan Pak</p>            
            <b-select v-model="form.data_page8_20" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br /> 
            <p style="font-weight: bold;">Adanya Kontrol/Evaluasi Kegiatan Yang Dilakukan Oleh Pihak Ketiga, Sesuai Dengan Yang Telah Disepakati Atau Kontrak Tertulis</p>            
            <b-select v-model="form.data_page8_21" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br /> 
            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); page7 = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); page9 = true" expanded>Next</b-button>
                </div>
            </div>                                   

        </section>                                                     
<!-- PAGE EMPAT BELAS -->
        <section v-if="page9" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <p  style="font-weight: normal; background-color: white;">
                Kesimpulan / Saran / Rekomendasi <br />
                Berikan Kesimpulan / Saran / Rekomendasi dari Hasil Inspeksi Perusahaan.
            </p>
            <br />
            <b-field label="Kesimpulan">
                <b-input size="is-medium" type="text" v-model="form.page_9_1" placeholder=""></b-input>
            </b-field>
            <br />
            <b-field label="Saran/Rekomendasi">
                <b-input size="is-medium" type="text" v-model="form.page_9_2" placeholder=""></b-input>
            </b-field>
            <br />
            <p>
Upload Data Dukung Hasil Inspeksi
Upload data dukung hasil inspeksi dalam 1(satu) file format PDF diantaranya:<br />
1. Nomor Izin Edar Alkes Yang Dimiliki (Sebagai Pemegang Izin Edar)<br />
2. Nomor Izin Edar Alkes Yang Dimiliki (Bukan Sebagai Pemegang Izin Edar)<br />
3. Penanggung Jawab Teknis (Ijazah dan Sertifikat Pendukung )<br />
4. Tenaga Teknisi (Khusus PAK yang menyalurkan Alkes Elektromedik dan Instrumen Produk IVD) (Data Nama dan Ijazah)<br />
5. Data lain yang dirasa dibutuhkan.                
            </p>
            <br />
            <p style="font-weight: bold;">Upload File Dokumen</p>
            <ul>
                <li style="border: 1px solid #CCC; margin-top: 1em;" v-if="files.length > 0" v-for="(item, index) in files">
                    <img @click="clickImage(index)" style="width: 100%;" src="http://202.150.151.50/e-mosi/public-assets/images/doc-icon.png" />
                    <span style="margin: 1em; font-weight: bold; text-transform: uppercase;">{{namaFiles[index]}}</span>
                </li>
            </ul>    
            <file-upload
                style="width: 100%; margin-top: 1em; margin-bottom; 1em;"
                ref="upload"
                :multiple="true"
                v-model="files"
                :post-action="`${this.$api}/upload`"
                @input="onChangeFile"
            >
                <b-button type="is-success is-light" expanded rounded>Pilih File / Dokumen</b-button>
                <!-- <img style="width: 60px;" :src="`${this.$assets}/images/upload-icon.png`" /> -->
            </file-upload>

            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); page8 = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" @click="submitProses" expanded>Proses</b-button>
                </div>
            </div>        

        </section>
        <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="false"></b-loading>
    </div>
</template>

<script>
    import qs from "qs";

    export default {
        props: ['username', 'longlat'],
        data() {
            return {
                isLoading: false,
                name: 'John Silver',
                form: [],
                petugas: ['Warningsih', 'Rd Hermalia', 'Yura Kalfataru', 'Heru Syafarudin', 'Mega Purnamasari', 'Susy Susilawaty', 'Arief Rachman', 'Susilawati', 'Seja', 'Ade Lili', 'Siti', 'Anti', 'Prima Eko', 'Mukhlis', 'Gita', 'Amir', 'APBD'],
                selectedPetugas: [],
                selectedPetugasString: '',
                listKabkot: ['Kabupaten Bogor', 'Kota Depok', 'Kota Bekasi', 'Kota Cirebon', 'Kota Banjar', 'Kota Tasikmalaya', 'Kota Cimahi', 'Kota Bandung', 'Kota Sukabumi', 'Kota Bogor', 'Kabupaten Bandung Barat', 'Kabupaten Bekasi', 'Kabupaten Karawang', 'Kabupaten Purwakarta', 'Kabupaten Subang', 'Kabupaten Indramayu', 'Kabupaten Sumedang', 'Kabupaten Majalengka', 'Kabupaten Cirebon', 'Kabupaten Kuningan', 'Kabupaten Ciamis', 'Kabupaten Tasikmalaya', 'Kabupaten Garut', 'Kabupaten Cianjur', 'Kabupaten Sukabumi'],
                page1: true,
                page2: false,
                page3: false,
                page4: false,
                page5: false,
                page6: false,
                page7: false,
                page8: false,
                page9: false,
                files: [],
                namaFiles: [],
                fotoLokasi: [],
                isUpdate: false                
            }
        },
        methods: {
            
            clearPage: function() {
                this.page1  = false
                this.page2  = false
                this.page3  = false
                this.page4  = false
                this.page5  = false
                this.page6  = false
                this.page7  = false
                this.page8  = false
                this.page9  = false
            },

            clickImage: function(id) {
                const index = this.files.indexOf(id);
                const indexName = this.namaFiles.indexOf(id);
                this.$buefy.dialog.confirm({
                    message: 'Apakah anda yakin ingin menghapus file ini?',
                    onConfirm: () => {
                        this.files.splice(index)
                        this.namaFiles.splice(indexName)
                        this.$buefy.toast.open({
                            message: `File berhasil dihapus`,
                            position: 'is-bottom',
                            type: 'is-success'
                        })  
                    }
                })      
            },  
            clickImageLokasi: function(id) {
                const index = this.fotoLokasi.indexOf(id);
                this.$buefy.dialog.confirm({
                    message: 'Apakah anda yakin ingin menghapus foto ini?',
                    onConfirm: () => {                    
                        this.fotoLokasi.splice(index)
                        this.$buefy.toast.open({
                            message: `Foto berhasil dihapus`,
                            position: 'is-bottom',
                            type: 'is-success'
                        })  
                    }
                })      
            }, 
            saveDraft: function() {
                this.submitProses()
            },
            addPetugas: function(petugas) {
                console.log(petugas)
                this.selectedPetugas.push(petugas)
                this.selectedPetugasString = this.selectedPetugas.toString();
                console.log(this.selectedPetugas)
            },

            resetPetugas: function() {
                this.selectedPetugas = []
                this.selectedPetugasString = ''
            },  
            fetchData: function(id) {
                this.form = []
                this.files = []
                this.fotoLokasi = []
                this.$http.get(this.$api + '/read-monev?id=' + id + '&jenis=monevpak')
                    .then((res) => {
                        console.log(res)
                        this.selectedPetugasString = res.data.data.CONTENT.content.petugas.toString()
                        this.form = res.data.data.CONTENT.content
                        this.files = res.data.data.CONTENT.data_file,
                        this.fotoLokasi = res.data.data.CONTENT.data_foto_lokasi                     
                    })                   
            },
            promptLainnya() {
                this.$buefy.dialog.prompt({
                    message: `Masukan nama petugas`,
                    inputAttrs: {
                        placeholder: 'cth: Walter',
                        maxlength: 99
                    },
                    trapFocus: true,
                    onConfirm: (value) => {
                        this.addPetugas(value)
                    }
                })
            },                                                                    

            submitProses: function() {
                console.log(this.namaFiles)

                if(this.files.length > 0) {
                    this.files.map((item, index) => {
                        console.log(item)
                        console.log(index)
                        this.files[index].response.data.namaFile = this.namaFiles[index]
                    })
                }

                this.form['petugas'] = this.selectedPetugasString
                this.isLoading = true;
                let data = {
                    DATA: this.form,
                    DATA_FILE: this.files,
                    DATA_IMG_LOKASI: this.fotoLokasi,
                    USERNAME: this.username,
                    LONGLAT: this.longlat,
                    JENIS: 'pak'
                };

          
                let urlPost = (this.isUpdate == true) ? this.$api + '/update-monev?id=' + this.$route.query.id + '&jenis=monevpak' : this.$api + '/input-monev';

                this.$http.post(urlPost, qs.stringify(data))
                    .then((res) => {
                        this.isLoading = false;
                        if(res.data.status == true) {
                            this.$buefy.dialog.alert('Monev berhasil ditambahkan!')
                            this.clearPage();
                            this.page1 = true
                            this.form = []
                            this.files = []
                            this.fotoLokasi = []
                        } else {
                            this.$buefy.dialog.alert('Ops! Terjadi Kesalahan.')
                        }
                    })                 
            },

            onChangeFile: function(e) {
                if (this.$refs.upload.active) {
                    return false
                }
                let countFiles = (this.namaFiles.length == 0) ? 0 : this.namaFiles.length
                this.$buefy.dialog.prompt({
                    message: `Masukan informasi file`,
                    inputAttrs: {
                        maxlength: 99
                    },
                    trapFocus: true,
                    closeOnConfirm: true,
                    onConfirm: (value) => {
                        this.$refs.upload.active = true
                        this.namaFiles[countFiles] = value
                    }
                })
            },

            onChangeFileLokasi: function(e) {
                this.$refs.uploadFotoLokasi.active = true
                console.log(this.fotoLokasi)
            },            

            inputFile: function (newFile, oldFile) {
                console.log('input file')
                if (newFile && oldFile && !newFile.active && oldFile.active) {
                    // Get response data
                    console.log('response', newFile.response)
                    if (newFile.xhr) {
                    //  Get the response status code
                    console.log('status', newFile.xhr.status)
                    }
                }
            },
            inputFilter: function (newFile, oldFile, prevent) {
                if (newFile && !oldFile) {
                    // Filter non-image file
                    if (!/\.(jpeg|jpe|jpg|gif|png|webp|pdf)$/i.test(newFile.name)) {
                    return prevent()
                    }
                }

                // Create a blob field
                newFile.blob = ''
                let URL = window.URL || window.webkitURL
                if (URL && URL.createObjectURL) {
                    newFile.blob = URL.createObjectURL(newFile.file)
                }
            }            
        },

        created() {
            if(this.$route.query.edit == 'true') {
                this.isUpdate = true
                this.fetchData(this.$route.query.id)
            }
        }
    }
</script>
