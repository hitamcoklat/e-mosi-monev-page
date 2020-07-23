<template>
    <div style="max-width: 450px; padding: 0px;" class="container">
        <!-- PAGE SATU -->
        <section v-if="page1" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <div style="background-color: #EEECD6; padding: 10px;">
                <p style="text-align: justify;">
<font style="font-weight: bold;">PETUNJUK PENGISIAN</font><br />
Formulir  A: Data Profil 
<br />
• Terdiri dari data perusahaan, data produk yang diproduksi dan data karyawan <br />
• Data profil diisi oleh perusahaan sarana  produksi alat kesehatan dan/atau PKRT dengan lengkap dan sebenarnya<br />
• Petugas monitoring dan evaluasi sarana produksi mengecek kelengkapan dan kebenaran pengisian formulir melalui verifikasi dokumen<br /><br /> 

Formulir  B: Pemeriksaan Sarana Produksi Alat Kesehatan dan/atau PKRT<br />
• Obyek inspeksi sarana produksi adalah Sistem Manajemen Mutu (persyaratan umum dan persyaratan dokumen), Tanggung Jawab Manajemen, Pengeloalaan Sumber Daya (personel serta bangunan dan fasilitas),  Realisasi Produk, Pengukuran, Analisa dan Perbaikan, Sarana dan Prasarana Pendukung, Sanitasi dan Higiene Karyawan. <br />
• Petugas inspeksi sarana produksi melakukan pengamatan, pemeriksaan dan penilaian terhadap komponen-komponen persyaratan cara pembuatan alat kesehatan yang baik (CPAKB) dan/atau Cara Pembuatan Perbekalan Kesehatan Rumah Tangga yang Baik (CPPKRTB).<br />
• Beri tanda √ pada kolom Ya (Y) atau Tidak (T) sesuai dengan hasil pengamatan, pemeriksaan dan penilaian. <br />
• Petugas inspeksi mengisi kolom keterangan apabila diperoleh informasi adanya masalah/kendala dan/atau dukungan dalam pelaksanaan masing-masing komponen atau informasi tambahan lainnya.<br />
• Petugas inspeksi mengisi daftar temuan produk alat kesehatan, apabila menemukan adanya ketidak-sesuaian dengan Sertifikat Produksi, Izin Edar Produk, Mutu Produk, atau temuan lainnya.<br /><br />

Cara Penghitungan Tingkat Kepatuhan CPAKB/CPPKRTB<br />
• Untuk setiap butir pertanyaan yang dijawab YA oleh sumber data (informan) dan terbukti ADA pada saat pengamatan, maka diberi skor 1. Bila dijawab TIDAK/TIDAK TAHU oleh sumber data atau terbukti TIDAK ADA pada saat pengamatan, beri skor 0. <br />
• Jumlahkan seluruh skor YA yang diperoleh.<br />
• Hitung persentase tingkat kepatuhan CPAKB/CPPKRTB dengan cara membagi jumlah skor yang dicapai (N) dengan jumlah skor maksimal kemudian dikalikan 100%.<br />  
</p>
            </div>
            <br />
            <div class="buttons">
                <b-button v-on:click="clearPage(); page2 = true" type="is-primary is-large" expanded>Next</b-button>
            </div>        
  
        </section>

        <!-- PAGE DUA -->
        <section v-if="page2" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <p style="font-weight: bold;">Form A | Data Profil</p>
            <br />
            <b-field label="Nama Badan Hukum Perusahaan">
                <b-input size="is-medium" type="text" v-model="form.page_2_1" placeholder=""></b-input>
            </b-field>
            <p style="font-weight: bold;">Status Perusahaan</p>
            <b-select v-model="form.page_2_2" placeholder="Pilihan" expanded>
                <option value="PMA">PMA</option>
                <option value="PMDN">PMDN</option>
            </b-select>            
            <b-field label="Alamat Kantor dan Telp/Fax">
                <b-input size="is-medium" type="text" v-model="form.page_2_3" placeholder=""></b-input>
            </b-field>
            <b-field label="Alamat Pabrik dan Telp/Fax">
                <b-input size="is-medium" type="text" v-model="form.page_2_4" placeholder=""></b-input>
            </b-field>
            <b-field label="Email Perusahaan">
                <b-input size="is-medium" type="text" v-model="form.page_2_5" placeholder=""></b-input>
            </b-field>
            <b-field label="Nama Pimpinan Perusahaan">
                <b-input size="is-medium" type="text" v-model="form.page_2_6" placeholder=""></b-input>
            </b-field>
            <b-field label="Nama Penanggung Jawab Teknis">
                <b-input size="is-medium" type="text" v-model="form.page_2_7" placeholder=""></b-input>
            </b-field>
            <b-field label="N P W P">
                <b-input size="is-medium" type="text" v-model="form.page_2_8" placeholder=""></b-input>
            </b-field>
            <b-field label="Nomor Sertifikat Produksi yang masih berlaku (Lampirkan)">
                <b-input size="is-medium" type="text" v-model="form.page_2_9" placeholder=""></b-input>
            </b-field>
            <br />       
                                                                                    
            <br />
            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); page1 = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); page3 = true" expanded>Next</b-button>
                </div>
            </div>              

        </section>

        <section v-if="page3" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <p style="font-weight: bold;">Kategori Alat Kesehatan Yang Diproduksi</p><br />
            <div class="field">
                <b-checkbox v-model="form.peralatan_kimia_klinik_dan_toksikologi_klinik"
                    true-value="Yes"
                    false-value="No">
                    Peralatan Kimia Klinik Dan Toksikologi Klinik
                </b-checkbox>
            </div>            
            <div class="field">
                <b-checkbox v-model="form.peralatan_hematologi_dan_patologi"
                    true-value="Yes"
                    false-value="No">
                    Peralatan Hematologi Dan Patologi
                </b-checkbox>
            </div>            
            <div class="field">
                <b-checkbox v-model="form.peralatan_imunologi_dan_mikrobiologi"
                    true-value="Yes"
                    false-value="No">
                    Peralatan Imunologi Dan Mikrobiologi
                </b-checkbox>
            </div>            
            <div class="field">
                <b-checkbox v-model="form.peralatan_anestesi"
                    true-value="Yes"
                    false-value="No">
                    Peralatan Anestesi
                </b-checkbox>
            </div>
            <div class="field">
                <b-checkbox v-model="form.peralatan_kardiologi"
                    true-value="Yes"
                    false-value="No">
                    Peralatan Kardiologi
                </b-checkbox>
            </div>
            <div class="field">
                <b-checkbox v-model="form.peralatan_telinga_hidung_dan_tenggorokan_tht"
                    true-value="Yes"
                    false-value="No">
                    Peralatan Telinga, Hidung Dan Tenggorokan (THT)
                </b-checkbox>
            </div>
            <div class="field">
                <b-checkbox v-model="form.peralatan_gastroenterologi_urologi_gu"
                    true-value="Yes"
                    false-value="No">
                    Peralatan Gastroenterologi-Urologi (GU)
                </b-checkbox>
            </div>
            <div class="field">
                <b-checkbox v-model="form.peralatan_rumah_sakit_umum_dan_perorangan_rsu_p"
                    true-value="Yes"
                    false-value="No">
                    Peralatan Rumah Sakit Umum Dan Perorangan (RSU & P)
                </b-checkbox>
            </div>
            <div class="field">
                <b-checkbox v-model="form.peralatan_neurologi"
                    true-value="Yes"
                    false-value="No">
                    Peralatan Neurologi
                </b-checkbox>
            </div>
            <div class="field">
                <b-checkbox v-model="form.peralatan_obstetrik_dan_ginekologi_og"
                    true-value="Yes"
                    false-value="No">
                    Peralatan Obstetrik Dan Ginekologi (OG)
                </b-checkbox>
            </div>
            <div class="field">
                <b-checkbox v-model="form.peralatan_mata"
                    true-value="Yes"
                    false-value="No">
                    Peralatan Mata
                </b-checkbox>
            </div>
            <div class="field">
                <b-checkbox v-model="form.peralatan_ortopedi"
                    true-value="Yes"
                    false-value="No">
                    Peralatan Ortopedi
                </b-checkbox>
            </div>
            <div class="field">
                <b-checkbox v-model="form.peralatan_kesehatan_fisik"
                    true-value="Yes"
                    false-value="No">
                    Peralatan Kesehatan Fisik
                </b-checkbox>
            </div>
            <div class="field">
                <b-checkbox v-model="form.peralatan_radiologi"
                    true-value="Yes"
                    false-value="No">
                    Peralatan Radiologi
                </b-checkbox>
            </div>
            <div class="field">
                <b-checkbox v-model="form.peralatan_bedah_umum_dan_bedah_plastik"
                    true-value="Yes"
                    false-value="No">
                    Peralatan Bedah Umum Dan Bedah Plastik
                </b-checkbox>
            </div>
            <b-field label="Lainnya">
                <b-input size="is-medium" type="text" v-model="form.kategori_alat_kesehatan_yang_diproduksi_lainnya" placeholder=""></b-input>
            </b-field>            
            <br /> 
            <br />
            <p style="font-weight: bold;">Kategori PKRT Yang Diproduksi</p><br />
            <div class="field">
                <b-checkbox v-model="form.tisu_dan_kapas"
                    true-value="Yes"
                    false-value="No">
                    Tisu Dan Kapas
                </b-checkbox>
            </div>               
            <div class="field">
                <b-checkbox v-model="form.sediaan_untuk_mencuci"
                    true-value="Yes"
                    false-value="No">
                    Sediaan Untuk Mencuci
                </b-checkbox>
            </div>               
            <div class="field">
                <b-checkbox v-model="form.pembersih"
                    true-value="Yes"
                    false-value="No">
                    Pembersih
                </b-checkbox>
            </div>               
            <div class="field">
                <b-checkbox v-model="form.produk_perawatan_bayi_dan_ibu"
                    true-value="Yes"
                    false-value="No">
                    Produk Perawatan Bayi Dan Ibu
                </b-checkbox>
            </div>               
            <div class="field">
                <b-checkbox v-model="form.antiseptika_dan_desinfektan"
                    true-value="Yes"
                    false-value="No">
                    Antiseptika Dan Desinfektan
                </b-checkbox>
            </div>               
            <div class="field">
                <b-checkbox v-model="form.pewangi"
                    true-value="Yes"
                    false-value="No">
                    Pewangi
                </b-checkbox>
            </div>               
            <div class="field">
                <b-checkbox v-model="form.pestisida_rumah_tangga"
                    true-value="Yes"
                    false-value="No">
                    Pestisida Rumah Tangga
                </b-checkbox>
            </div>
            <b-field label="Lainnya">
                <b-input size="is-medium" type="text" v-model="form.kategori_pkrt_yang_diproduksi_lainnya" placeholder=""></b-input>
            </b-field>
            <br />
            <p style="font-weight: bold;">Status Perusahaan</p>            
            <b-select v-model="form.status_perusahaan" placeholder="Pilihan" expanded>
                <option value="PMA">PMA</option>
                <option value="PMDN">PMDN</option>
                <option value="Perseroan">Perseroan</option>
                <option value="Perorangan">Perorangan</option>
            </b-select>            
            <br /> 
            <p style="font-weight: bold;">Skala Perusaan</p>            
            <b-select v-model="form.skala_perusahaan" placeholder="Pilihan" expanded>
                <option value="Usaha Skala Besar">Usaha Skala Besar</option>
                <option value="UMKM">UMKM</option>
            </b-select> 
            <br />
            <p style="font-weight: bold;">Status Produk Yang Diproduksi</p><br />
            <div class="field">
                <b-checkbox v-model="form.page_3_lokal_sendiri"
                    true-value="Yes"
                    false-value="No">
                    Lokal Sendiri
                </b-checkbox>
            </div>                           
            <div class="field">
                <b-checkbox v-model="form.page_3_lisensi"
                    true-value="Yes"
                    false-value="No">
                    Lisensi
                </b-checkbox>
            </div>                           
            <div class="field">
                <b-checkbox v-model="form.page_3_perakitan"
                    true-value="Yes"
                    false-value="No">
                    Perakitan
                </b-checkbox>
            </div>                           
            <div class="field">
                <b-checkbox v-model="form.page_3_kemas_ulang"
                    true-value="Yes"
                    false-value="No">
                    Kemas Ulang
                </b-checkbox>
            </div>                           
            <div class="field">
                <b-checkbox v-model="form.page_3_khusus_ekspor"
                    true-value="Yes"
                    false-value="No">
                    Khusus Ekspor
                </b-checkbox>
            </div>

            <b-field label="Orientasi Penjualan (% dalam negeri dan ekspor)">
                <b-input size="is-medium" type="text" v-model="form.page_3_orientasi_penjualan_dalam_negeri_dan_ekspor" placeholder=""></b-input>
            </b-field> 

            <p style="font-weight: bold;">Sertifikat Yang Dimiliki</p><br />
            <div class="field">
                <b-checkbox v-model="form.page_3_cpakb"
                    true-value="Yes"
                    false-value="No">
                    CPAKB
                </b-checkbox>
            </div>
            <div class="field">
                <b-checkbox v-model="form.page_3_cppkrtb"
                    true-value="Yes"
                    false-value="No">
                    CPPKRTB
                </b-checkbox>
            </div>

            <p style="font-weight: bold;">ISO yang dimiliki</p><br />
            <div class="field">
                <b-checkbox v-model="form.page_3_9001_sistem_manajemen_mutu"
                    true-value="Yes"
                    false-value="No">
                    9001 - Sistem Manajemen Mutu
                </b-checkbox>
            </div>
            <div class="field">
                <b-checkbox v-model="form.page_3_13485_sistem_manajemen_mutu_alkes"
                    true-value="Yes"
                    false-value="No">
                    13485 – Sistem Manajemen Mutu - Alkes
                </b-checkbox>
            </div>
            <div class="field">
                <b-checkbox v-model="form.page_3_14001_sistem_manajemen_lingkungan"
                    true-value="Yes"
                    false-value="No">
                    14001 – Sistem Manajemen Lingkungan
                </b-checkbox>
            </div>
            <b-field label="Lainnya">
                <b-input size="is-medium" type="text" v-model="form.page_3_iso_yang_dimiliki_lainnya" placeholder=""></b-input>
            </b-field>            

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
            <br /> 
            <p style="font-weight: bold;">II. LOKASI DAN BANGUNAN</p>            
            <p style="font-weight: bold;">Lokasi Pabrik</p>            
            <b-select v-model="form.page_4_lokasi_pabrik" placeholder="Pilihan" expanded>
                <option value="Kawasan Industri">Kawasan Industri</option>
                <option value="Pemukiman">Pemukiman</option>
            </b-select>            
            <br /> 
            <p style="font-weight: bold;">Bangunan Pabrik</p>            
            <b-select v-model="form.page_4_skala_perusahaan" placeholder="Pilihan" expanded>
                <option value="Permanen">Permanen</option>
                <option value="Semi Permanen">Semi Permanen</option>
            </b-select>
            <br /> 
            <b-field label="Ruang Administrasi (Jumlah & Luas)">
                <b-input size="is-medium" type="text" v-model="form.page_4_ruang_administrasi_jumlah_luas" placeholder=""></b-input>
            </b-field>                       
            <br /> 
            <b-field label="Ruang Penyimpanan Bahan Baku (Jumlah & Luas)">
                <b-input size="is-medium" type="text" v-model="form.page_4_ruang_penyimpanan_bahan_baku_jumlah_luas" placeholder=""></b-input>
            </b-field>                       
            <br /> 
            <b-field label="Ruang Karantina (Jumlah & Luas)">
                <b-input size="is-medium" type="text" v-model="form.page_4_ruang_karantina_jumlah_luas" placeholder=""></b-input>
            </b-field>                       
            <br /> 
            <b-field label="Ruang Produksi (Jumlah & Luas)">
                <b-input size="is-medium" type="text" v-model="form.page_4_ruang_produksi_jumlah_luas" placeholder=""></b-input>
            </b-field>                       
            <br /> 
            <b-field label="Ruang Pengemasan (Jumlah & Luas)">
                <b-input size="is-medium" type="text" v-model="form.page_4_ruang_pengemasan_jumlah_luas" placeholder=""></b-input>
            </b-field>                       
            <br /> 
            <b-field label="Ruang Penyimpanan Barang Jadi (Jumlah & Luas)">
                <b-input size="is-medium" type="text" v-model="form.page_4_ruang_penyimpanan_barang_jadi_jumlah_luas" placeholder=""></b-input>
            </b-field>                       
            <br /> 
            <b-field label="Laboratorium QC (Jumlah & Luas)">
                <b-input size="is-medium" type="text" v-model="form.page_4_laboratorium_qc_jumlah_luas" placeholder=""></b-input>
            </b-field>                       
            <br /> 
            <b-field label="Ruang Bengkel (Jumlah & Luas)">
                <b-input size="is-medium" type="text" v-model="form.page_4_ruang_bengkel_jumlah_luas" placeholder=""></b-input>
            </b-field>                       
            <br /> 
            <b-field label="Ruang Bersih (Clean Room) (Jumlah & Luas)">
                <b-input size="is-medium" type="text" v-model="form.page_4_ruang_bersih_clean_room_jumlah_luas" placeholder=""></b-input>
            </b-field>  
            <br />
            <p style="font-weight: bold;">III. DATA PRODUK YANG DIPRODUKSI</p> 
            <br />
            <p style="font-weight: bold;">Nama Alkes/PKRT Yang Dimiliki Sesuai Sertifikat</p>            
            <b-select v-model="form.page_4_nama_alkes_pkrt_yang_dimiliki_sesuai_sertifikat" placeholder="Pilihan" expanded>
                <option value="Ada">Ada</option>
                <option value="Tidak Ada">Tidak Ada</option>
                <option value="Belum Semua">Belum Semua</option>
            </b-select>
            <br /> 
            <b-field label="Nama Alat Kesehatan/PKRT Yang Masih Diproduksi/Aktif (Lampirkan) dan Kapasitas Produksi Rata-Rata / Bulan">
                <b-input size="is-medium" type="text" v-model="form.page_4_nama_alat_kesehatan_pkrt_yang_masih_diproduksi_aktif_lampirkan_dan_kapasitas_produksi_rata_rata_bulan" placeholder=""></b-input>
            </b-field> 
            <br />
            <p style="font-weight: bold;">Penandaan / Labelling Alkes Yang Diproduksi</p>                                             
            <br />
            <p style="font-weight: bold;">Nama Produk</p>            
            <b-select v-model="form.page_4_nama_produk" placeholder="Pilihan" expanded>
                <option value="Ada">Ada</option>
                <option value="Tidak Ada">Tidak Ada</option>
            </b-select>                        
            <br />
            <p style="font-weight: bold;">Type/Model</p>            
            <b-select v-model="form.page_4_type_model" placeholder="Pilihan" expanded>
                <option value="Ada">Ada</option>
                <option value="Tidak Ada">Tidak Ada</option>
            </b-select>                        
            <br />
            <p style="font-weight: bold;">Nomor Batch/Lot/Seri</p>            
            <b-select v-model="form.page_4_nomor_batch_lot_seri" placeholder="Pilihan" expanded>
                <option value="Ada">Ada</option>
                <option value="Tidak Ada">Tidak Ada</option>
            </b-select>                        
            <br />
            <p style="font-weight: bold;">Tanggal Kadaluarsa</p>            
            <b-select v-model="form.page_4_tanggal_kadaluarsa" placeholder="Pilihan" expanded>
                <option value="Ada">Ada</option>
                <option value="Tidak Ada">Tidak Ada</option>
            </b-select>                        
            <br />
            <p style="font-weight: bold;">Kemasan</p>            
            <b-select v-model="form.page_4_kemasan" placeholder="Pilihan" expanded>
                <option value="Ada">Ada</option>
                <option value="Tidak Ada">Tidak Ada</option>
            </b-select>                        
            <br />
            <p style="font-weight: bold;">Nomor Izin Edar</p>            
            <b-select v-model="form.page_4_nomor_izin_edar" placeholder="Pilihan" expanded>
                <option value="Ada">Ada</option>
                <option value="Tidak Ada">Tidak Ada</option>
            </b-select>                        
            <br />
            <p style="font-weight: bold;">Nama Pabrik</p>            
            <b-select v-model="form.page_4_nama_pabrik" placeholder="Pilihan" expanded>
                <option value="Ada">Ada</option>
                <option value="Tidak Ada">Tidak Ada</option>
            </b-select>                        
            <br />
            <p style="font-weight: bold;">Alamat Pabrik</p>            
            <b-select v-model="form.page_4_alamat_pabrik" placeholder="Pilihan" expanded>
                <option value="Ada">Ada</option>
                <option value="Tidak Ada">Tidak Ada</option>
            </b-select>                        
            <br />
            <p style="font-weight: bold;">Nama Penyalur Tunggal</p>            
            <b-select v-model="form.page_4_nama_penyalur_tunggal" placeholder="Pilihan" expanded>
                <option value="Ada">Ada</option>
                <option value="Tidak Ada">Tidak Ada</option>
            </b-select>                        
            <br />
            <p style="font-weight: bold;">Alamat Penyalur</p>            
            <b-select v-model="form.page_4_alamat_penyalur" placeholder="Pilihan" expanded>
                <option value="Ada">Ada</option>
                <option value="Tidak Ada">Tidak Ada</option>
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
            <p style="font-weight: bold;">IV. DATA KARYAWAN</p>
            <br />
            <b-field label="Laki-laki">
                <b-input size="is-medium" type="text" v-model="form.page_5_laki_laki" placeholder=""></b-input>
            </b-field>            
            <br />
            <b-field label="Perempuan">
                <b-input size="is-medium" type="text" v-model="form.page_5_perempuan" placeholder=""></b-input>
            </b-field>
            <br />
            <p style="font-weight: bold;">Penanggung Jawab Teknis (PJT)</p> 
            <br />
            <b-field label="Nama">
                <b-input size="is-medium" type="text" v-model="form.page_5_nama" placeholder=""></b-input>
            </b-field>                                   
            <br />
            <b-field label="Ijazah Yang Dimiliki (Minimal D3)">
                <b-input size="is-medium" type="text" v-model="form.page_5_ijazah_yang_dimiliki_minimal_d_3" placeholder=""></b-input>
            </b-field>                                   
            <br />
            <b-field label="Sertifikat Pendukung">
                <b-input size="is-medium" type="text" v-model="form.page_5_sertifikat_pendukung" placeholder=""></b-input>
            </b-field>
            <br />
            <p style="font-weight: bold;">Bekerja Full Time</p>            
            <b-select v-model="form.page_5_bekerja_full_time" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
                <option value="Lainnya">Lainnya</option>
            </b-select>
            <br />
            <b-field label="Pilihan Lainnya">
                <b-input size="is-medium" type="text" v-model="form.page_5_bekerja_full_time_lainnya" placeholder=""></b-input>
            </b-field>
            <br />
            <p style="font-weight: bold;">Tenaga Teknisi dan Ijazah Yang Dimiliki (Khusus untuk Alkes Elektromedik dan Produk In Vitro Diagnostik)</p>                                                           
            <br />
            <b-field label="Nama dan Ijazah">
                <b-input size="is-medium" type="text" v-model="form.page_5_nama_dan_ijazah" placeholder=""></b-input>
            </b-field>
            <br />
            <p style="font-weight: bold;">Petugas Proteksi Radiasi (PPR)(Khusus untuk Alkes Elektromedik Radiasi)</p>            
            <br />
            <b-field label="Nama dan Sertifikasi & Surat Izin Bekerja dari BAPETEN">
                <b-input size="is-medium" type="text" v-model="form.page_5_nama_dan_sertifikasi_surat_izin_bekerja_dari_bapeten" placeholder=""></b-input>
            </b-field>
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
            <p style="font-weight: bold;">FORM.B | PEMERIKSAAN SARANA PRODUKSI ALAT KESEHATAN DAN/ATAU PKRT</p>
            <p style="font-weight: bold;">I. SISTEM MANAJEMEN MUTU</p>
            <p style="font-weight: bold;">Persyaratan Umum</p>
            <br />
            <p style="font-weight: bold;">Perusahaan Memiliki Pedoman Mutu</p>            
            <b-select v-model="form.page_6_1" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Perusahaan Memiliki Kebijikan Mutu (Visi)</p>            
            <b-select v-model="form.page_6_2" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Perusahaan Memiliki Sasaran Mutu (Misi)</p>            
            <b-select v-model="form.page_6_3" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Perusahaan Memiliki Struktur Organisasi</p>            
            <b-select v-model="form.page_6_4" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Perusahaan Memiliki Uraian Tugas Dan Tanggung Jawab Sesuai Struktur Organisasi</p>            
            <b-select v-model="form.page_6_5" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Persyaratan Dokumentasi</p>  
            <br />
            <p style="font-weight: bold;">Perusahaan Memiliki Prosedur Tetap (Protap) Pengendalian Dokumen (Cara Memperbaiki Dokumen/Kaji Ulang Dokumen Yang Mencakup Format, Isi, Pemberian Nomor, Penanggung Jawab, Ketentuan Tanggal Pemberlakuan, Peninjauan Kembali, Distribusi Dan Sebagainya)</p>            
            <b-select v-model="form.page_6_6" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Pengendalian Rekaman</p>            
            <b-select v-model="form.page_6_7" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Design Dan Pengembangan (Jika Ada)</p>            
            <b-select v-model="form.page_6_8" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Pembelian Bahan Baku Dan Bahan Pengemas</p>            
            <b-select v-model="form.page_6_9" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Penanganan Bahan Baku Dan Bahan Pengemas (Pemeriksaan Dan Penyimpanan)</p>            
            <b-select v-model="form.page_6_10" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Terkait Proses Produksi (Penimbangan Dan Pembuatan)</p>            
            <b-select v-model="form.page_6_11" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Penggunaan Fasilitas Bersama (Jika Ada)</p>            
            <b-select v-model="form.page_6_12" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Pengawasan Mutu Produk (In-Process Control Dan Produk Jadi)</p>            
            <b-select v-model="form.page_6_13" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Pemberian Penandaan Nomor Bets/Lot/Seri, Tanggal Kadaluwarsa/Tanggal Pembuatan.</p>            
            <b-select v-model="form.page_6_14" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Pengemasan Produk</p>            
            <b-select v-model="form.page_6_15" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Penyimpanan Produk</p>            
            <b-select v-model="form.page_6_16" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Pengendalian Produk Yang Tidak Sesuai</p>            
            <b-select v-model="form.page_6_17" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>  
            <br />                    
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Proses Sterilisasi Dan Validasi Steril (Jika Ada Produk Steril)</p>            
            <b-select v-model="form.page_6_18" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />                    
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Penyaluran Produk (Termasuk Jumlah, Nomor Bets/Lot/Seri, Nomor Izin Edar Dan Tujuannya)</p>            
            <b-select v-model="form.page_6_19" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />                    
            <p style="font-weight: bold;">Tersedia Protap Pembersihan/Pemeliharan Setiap Peralatan Produksi</p>            
            <b-select v-model="form.page_6_20" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />                    
            <p style="font-weight: bold;">Tersedia Protap Pembersihan/Pemeliharaan Setiap Ruangan Produksi</p>            
            <b-select v-model="form.page_6_21" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />                    
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Pengendalian Produk Dengan Umur Guna Terbatas Atau Memerlukan Penyimpanan Khusus Yang Dipersyaratkan (Jika Ada)</p>            
            <b-select v-model="form.page_6_22" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />                    
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Penanganan Produk Kembalian (Return)</p>            
            <b-select v-model="form.page_6_23" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />                    
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Penarikan Produk (Recall)</p>            
            <b-select v-model="form.page_6_24" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />                    
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Pemusnahan Produk</p>            
            <b-select v-model="form.page_6_25" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />                    
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Layanan Purna Jual,(Jika Ada)</p>            
            <b-select v-model="form.page_6_26" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />                    
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Pelatihan Teknis Tertentu (Jika Ada)</p>            
            <b-select v-model="form.page_6_27" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>  
            <br />                    
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Kalibrasi Dan Verifikasi Alat Periksa Dan Alat Ukur</p>            
            <b-select v-model="form.page_6_28" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />                    
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Audit Internal</p>            
            <b-select v-model="form.page_6_29" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />                    
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Penerimaan Dan Penanganan Keluhan Pelanggan Atau Customer Feedback</p>            
            <b-select v-model="form.page_6_30" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />                    
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Tindakan Perbaikan Dan Pencegahan</p>            
            <b-select v-model="form.page_6_31" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />                    
            <p style="font-weight: bold;">Perusahaan Memiliki Protap Penanganan Limbah</p>            
            <b-select v-model="form.page_6_32" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                      
            <br />                    
            <p style="font-weight: bold;">Perusahaan Memiliki Buku Kepustakaan Tentang Alkes/PKRT</p>            
            <b-select v-model="form.page_6_33" placeholder="Pilihan" expanded>
                <option value="Ada">Ya</option>
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
            <p style="font-weight: bold;">II. PENGELOLAAN SUMBER DAYA</p>
            <p style="font-weight: bold;">PERSONIL</p>
            <br />
            <p style="font-weight: bold;">Perusahaan Memfasilitasi Karyawan Atau Penanggung Jawab Teknis Untuk Mengikuti Pelatihan CPAKB/ CPPKRTB Dan Rekamannya</p>            
            <b-select v-model="form.page_7_1" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Perusahaan Memiliki Rekaman Pelatihan Teknis Tertentu Bagi Karyawan (Jika Ada)</p>            
            <b-select v-model="form.page_7_2" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Perusahaan Memfasilitasi Karyawan Atau Penanggung Jawab Teknis Mengikuti Asistensi E-Report Dan E-Watch</p>            
            <b-select v-model="form.page_7_3" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Perusahaan Telah Melapor Secara Berkala Hasil Produksi Dan Penyaluran Produk (E-Report)</p>            
            <b-select v-model="form.page_7_4" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Perusahaan Telah Melapor Kejadian Tidak Diinginkan/ KTD (E-Watch) - (Jika Ada, Lampirkan)</p>            
            <b-select v-model="form.page_7_5" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">BANGUNAN DAN FASILITAS</p>            
            <p style="font-weight: bold;">1. Ruang Administrasi</p> 
            <br />
            <p style="font-weight: bold;">Ruang Administrasi Terpisah Dengan Ruangan Lain</p>            
            <b-select v-model="form.page_7_6" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                       
            <br />
            <p style="font-weight: bold;">Ruang Administrasi Dengan Kapasitas Yang Memadai</p>            
            <b-select v-model="form.page_7_7" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                       
            <br />
            <p style="font-weight: bold;">Tersedia Fasilitas Peralatan Untuk Administrasi</p>            
            <b-select v-model="form.page_7_8" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                       
            <br />
            <p style="font-weight: bold;">Tersedia Fasilitas Penunjang Untuk Kebersihan</p>            
            <b-select v-model="form.page_7_9" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                       
            <br />
            <p style="font-weight: bold;">Tersedia Fasilitas Penunjang Untuk Keamanan</p>            
            <b-select v-model="form.page_7_10" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                       
            <br />
            <p style="font-weight: bold;">Tersedia Tanda Titik Kumpul Pada Perusahaan</p>            
            <b-select v-model="form.page_7_11" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">2. Ruang Penyimpanan Bahan Baku dan Bahan Pengemas</p>                       
            <br />
            <p style="font-weight: bold;">Ruang Penyimpanan Bahan Baku Dan Bahan Pengemas Terpisah Dengan Ruangan Lain</p>            
            <b-select v-model="form.page_7_12" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Ruang Penyimpanan Bahan Baku Dan Bahan Pengemas Dengan Kapasitas Yang Memadai</p>            
            <b-select v-model="form.page_7_13" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Fasilitas Ruang Penyimpanan Bahan Baku Dan Bahan Pengemas</p>
            <br />
            <p style="font-weight: bold;">Kondisi Ruangan Bersih</p>            
            <b-select v-model="form.page_7_14" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Ventilasi Memadai</p>            
            <b-select v-model="form.page_7_15" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Penerangan Memadai</p>            
            <b-select v-model="form.page_7_16" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Lantai Plester</p>            
            <b-select v-model="form.page_7_17" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Dinding Plester</p>            
            <b-select v-model="form.page_7_18" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Atap</p>            
            <b-select v-model="form.page_7_19" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Pengatur Suhu/Kelembaban (Sesuai Produk)</p>            
            <b-select v-model="form.page_7_20" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Pengontrol Suhu (Sesuai Produk)</p>            
            <b-select v-model="form.page_7_21" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Cool-Storage/Kulkas (Sesuai Produk)</p>            
            <b-select v-model="form.page_7_22" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Palet</p>            
            <b-select v-model="form.page_7_23" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Rak</p>            
            <b-select v-model="form.page_7_24" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Alat Pengangkut Bahan Baku Dan Bahan Pengemas</p>            
            <b-select v-model="form.page_7_25" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Alat Pemadam Kebakaran Ringan (APAR) Yang Berfungsi Baik</p>            
            <b-select v-model="form.page_7_26" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Kontrol Hama Dan Catatannya</p>            
            <b-select v-model="form.page_7_27" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Tanda Arah Evakuasi</p>            
            <b-select v-model="form.page_7_28" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Fasilitas Penunjang Untuk Kebersihan</p>            
            <b-select v-model="form.page_7_29" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Fasilitas Penunjang Untuk Keselamatan Kerja Karyawan(K3) Seperti Ear-Plug, Masker, Sarung Tangan, Dll</p>            
            <b-select v-model="form.page_7_30" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">3. Ruang Karantina</p>
            <br />
            <p style="font-weight: bold;">Ruang Karantina Terpisah Dengan Ruangan Lain</p>            
            <b-select v-model="form.page_7_31" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Ruang Karantina Dengan Kapasitas Yang Memadai</p>            
            <b-select v-model="form.page_7_32" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Fasilitas Ruang Karantina</p>            
            <br />
            <p style="font-weight: bold;">Kondisi Ruangan Bersih</p>            
            <b-select v-model="form.page_7_33" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Ventilasi Memadai</p>            
            <b-select v-model="form.page_7_34" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Penerangan Memadai</p>            
            <b-select v-model="form.page_7_35" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Lantai Plester</p>            
            <b-select v-model="form.page_7_36" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Dinding Plester</p>            
            <b-select v-model="form.page_7_37" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Atap</p>            
            <b-select v-model="form.page_7_38" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Pengatur Suhu/Kelembaban (Sesuai Produk)</p>            
            <b-select v-model="form.page_7_39" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Pengontrol Suhu (Sesuai Produk)</p>            
            <b-select v-model="form.page_7_40" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Cool-Storage/Kulkas (Sesuai Produk)</p>            
            <b-select v-model="form.page_7_41" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Palet</p>            
            <b-select v-model="form.page_7_42" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Rak</p>            
            <b-select v-model="form.page_7_43" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Alat Pengangkut Produk Yang Dikarantina</p>            
            <b-select v-model="form.page_7_44" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Alat Pemadam Kebakaran Ringan (APAR) Yang Berfungsi Baik</p>            
            <b-select v-model="form.page_7_45" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Kontrol Hama Dan Catatannya</p>            
            <b-select v-model="form.page_7_46" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Fasilitas Penunjang Untuk Kebersihan</p>            
            <b-select v-model="form.page_7_47" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Fasilitas Penunjang Untuk Keselamatan Kerja Karyawan(K3) Seperti Ear-Plug, Masker, Sarung Tangan, Dll</p>            
            <b-select v-model="form.page_7_48" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
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
            <p style="font-weight: bold;">4. Ruang Produksi</p>
            <br />
            <p style="font-weight: bold;">Ruang Produksi Terpisah Dengan Ruangan Lain</p>            
            <b-select v-model="form.page_8_1" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Ruang Produksi Dengan Kapasitas Yang Memadai Sesuai Volume/Jumlah Produksi</p>            
            <b-select v-model="form.page_8_2" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Ruang Produksi Dibuat Terpisah Untuk Setiap Jenis/Bentuk Produk</p>            
            <b-select v-model="form.page_8_3" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Peralatan Produksi Yang Memadai Dalam Jumlah Dan Kapasitas Untuk Setiap Jenis Produk</p>            
            <b-select v-model="form.page_8_4" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Fasilitas Ruang Produksi </p>
            <br />
            <p style="font-weight: bold;">Kondisi Ruangan Bersih</p>            
            <b-select v-model="form.page_8_5" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Ventilasi Memadai</p>            
            <b-select v-model="form.page_8_6" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Penerangan Memadai</p>            
            <b-select v-model="form.page_8_7" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Lantai Keramik</p>            
            <b-select v-model="form.page_8_8" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Dinding Plester</p>            
            <b-select v-model="form.page_8_9" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Atap Dengan Plavon</p>            
            <b-select v-model="form.page_8_10" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Pengatur Suhu/Kelembaban</p>            
            <b-select v-model="form.page_8_11" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Pengontrol Suhu</p>            
            <b-select v-model="form.page_8_12" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Cool-Storage/Kulkas (Sesuai Produk)</p>            
            <b-select v-model="form.page_8_13" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Palet</p>            
            <b-select v-model="form.page_8_14" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Rak</p>            
            <b-select v-model="form.page_8_15" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Alat Pengangkut Produk Jadi</p>            
            <b-select v-model="form.page_8_16" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Alat Pemadam Kebakaran Ringan (APAR) Yang Berfungsi Baik</p>            
            <b-select v-model="form.page_8_17" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Kontrol Hama Dan Catatannya</p>            
            <b-select v-model="form.page_8_18" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Sumber Air</p>            
            <b-select v-model="form.page_8_19" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Tanda Arah Evakuasi</p>            
            <b-select v-model="form.page_8_20" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Fasilitas Penunjang Untuk Kebersihan</p>            
            <b-select v-model="form.page_8_21" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Fasilitas Penunjang Untuk Keselamatan Kerja Karyawan(K3) Seperti Ear-Plug, Masker, Sarung Tangan, Dll</p>            
            <b-select v-model="form.page_8_22" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">5. Ruang Pengemasan, Jika Terpisah Dengan Ruang Produksi</p>
            <br />
            <p style="font-weight: bold;">Ruang Pengemasan Primer/Sekunder Yang Diatur Untuk Mencegah Kontaminasi Silang</p>            
            <b-select v-model="form.page_8_23" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold;">Fasilitas Ruang Pengemasan </p>
            <br />
            <p style="font-weight: bold;">Kondisi Ruangan Bersih</p>            
            <b-select v-model="form.page_8_24" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold;">Ventilasi Memadai</p>            
            <b-select v-model="form.page_8_25" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold;">Penerangan Memadai</p>            
            <b-select v-model="form.page_8_26" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold;">Lantai Plester</p>            
            <b-select v-model="form.page_8_27" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold;">Dinding Plester</p>            
            <b-select v-model="form.page_8_28" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold;">Atap</p>            
            <b-select v-model="form.page_8_29" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold;">Tersedia Pengatur Suhu/Kelembaban</p>            
            <b-select v-model="form.page_8_30" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold;">Tersedia Pengontrol Suhu</p>            
            <b-select v-model="form.page_8_31" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold;">Tersedia Palet</p>            
            <b-select v-model="form.page_8_32" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold;">Tersedia Alat Pemadam Kebakaran Ringan (APAR) Yang Berfungsi Baik</p>            
            <b-select v-model="form.page_8_33" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold;">Tersedia Kontrol Hama Dan Catatannya</p>            
            <b-select v-model="form.page_8_34" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold;">Tersedia Fasilitas Penunjang Untuk Kebersihan</p>            
            <b-select v-model="form.page_8_35" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold;">Tersedia Fasilitas Penunjang Untuk Keselamatan Kerja Karyawan(K3) Seperti Ear-Plug, Masker, Sarung Tangan, Dll</p>            
            <b-select v-model="form.page_8_36" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
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
        <section v-if="page9" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <br />
            <p style="font-weight: bold;">6. Ruang Penyimpanan Produk Jadi</p>
            <br />
            <p style="font-weight: bold;">Ruang Penyimpanan Produk Jadi Terpisah Dengan Ruangan Lain</p>            
            <b-select v-model="form.page_9_1" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold;">Ruang Penyimpanan Produk Jadi Dengan Kapasitas Yang Memadai</p>            
            <b-select v-model="form.page_9_2" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold;">Fasilitas Ruang Penyimpanan Produk Jadi</p> 
            <br />
            <p style="font-weight: bold;">Kondisi Ruangan Bersih</p>            
            <b-select v-model="form.page_9_3" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Ventilasi Memadai</p>            
            <b-select v-model="form.page_9_4" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Penerangan Memadai</p>            
            <b-select v-model="form.page_9_5" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Lantai Plester</p>            
            <b-select v-model="form.page_9_6" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Dinding Plester</p>            
            <b-select v-model="form.page_9_7" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Atap</p>            
            <b-select v-model="form.page_9_8" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Pengatur Suhu / Kelembaban</p>            
            <b-select v-model="form.page_9_9" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Pengontrol Suhu</p>            
            <b-select v-model="form.page_9_10" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Cool-Storage/Kulkas (Produk Tertentu)</p>            
            <b-select v-model="form.page_9_11" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Palet</p>            
            <b-select v-model="form.page_9_12" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Rak</p>            
            <b-select v-model="form.page_9_13" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Alat Pengangkut Produk Jadi</p>            
            <b-select v-model="form.page_9_14" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Alat Pemadam Kebakaran Ringan (APAR) Yang Berfungsi Baik</p>            
            <b-select v-model="form.page_9_15" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Kontrol Hama Dan Catatannya</p>            
            <b-select v-model="form.page_9_16" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Tanda Arah Evakuasi</p>            
            <b-select v-model="form.page_9_17" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Fasilitas Penunjang Untuk Kebersihan</p>            
            <b-select v-model="form.page_9_18" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Fasilitas Penunjang Untuk Keselamatan Kerja Karyawan(K3) Seperti Ear-Plug, Masker, Sarung Tangan, Dll</p>            
            <b-select v-model="form.page_9_19" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold">7. Laboratorium Quality Control</p>
            <br />
            <p style="font-weight: bold;">Laboratorium QC Dengan Kapasitas Yang Memadai</p>            
            <b-select v-model="form.page_9_20" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Fasilitas Laboratorium QC </p>
            <br />
            <p style="font-weight: bold;">Kondisi Ruangan Bersih</p>            
            <b-select v-model="form.page_9_21" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Ventilasi Memadai</p>            
            <b-select v-model="form.page_9_22" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Penerangan Memadai</p>            
            <b-select v-model="form.page_9_23" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Lantai Keramik</p>            
            <b-select v-model="form.page_9_24" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Dinding Plester</p>            
            <b-select v-model="form.page_9_25" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Atap Dengan Plavon</p>            
            <b-select v-model="form.page_9_26" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Pengatur Suhu/Kelembaban</p>            
            <b-select v-model="form.page_9_27" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Pengontrol Suhu</p>            
            <b-select v-model="form.page_9_28" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Cool-Storage/Kulkas (Produk Tertentu)</p>            
            <b-select v-model="form.page_9_29" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Peralatan Laboratorium</p>            
            <b-select v-model="form.page_9_30" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Alat Pemadam Kebakaran Ringan (APAR) Yang Berfungsi Baik</p>            
            <b-select v-model="form.page_9_31" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Kontrol Hama Dan Catatannya</p>            
            <b-select v-model="form.page_9_32" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Sumber Air</p>            
            <b-select v-model="form.page_9_33" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Fasilitas Penunjang Untuk Kebersihan</p>            
            <b-select v-model="form.page_9_34" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Fasilitas Penunjang Untuk Keselamatan Kerja Karyawan(K3) Seperti Ear-Plug, Masker, Sarung Tangan, Dll</p>            
            <b-select v-model="form.page_9_35" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">8. Ruang Bengkel (Untuk Produk Tertentu)</p>
            <br />
            <p style="font-weight: bold;">Ruang Bengkel Dengan Kapasitas Yang Memadai</p>            
            <b-select v-model="form.page_9_36" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold;">Fasilitas Bengkel</p>
            <br />
            <p style="font-weight: bold;">Kondisi Ruangan Bersih</p>            
            <b-select v-model="form.page_9_37" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Ventilasi Memadai</p>            
            <b-select v-model="form.page_9_38" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Penerangan Memadai</p>            
            <b-select v-model="form.page_9_39" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Lantai Plester</p>            
            <b-select v-model="form.page_9_40" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Dinding Plester</p>            
            <b-select v-model="form.page_9_41" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Atap</p>            
            <b-select v-model="form.page_9_42" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Peralatan Bengkel</p>            
            <b-select v-model="form.page_9_43" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Alat Pemadam Kebakaran Ringan (APAR) Yang Berfungsi Baik</p>            
            <b-select v-model="form.page_9_44" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Kontrol Hama Dan Catatannya</p>            
            <b-select v-model="form.page_9_45" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Fasilitas Penunjang Untuk Kebersihan</p>            
            <b-select v-model="form.page_9_46" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Tersedia Fasilitas Penunjang Untuk Keamanan Listrik</p>            
            <b-select v-model="form.page_9_47" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">RowTersedia Fasilitas Penunjang Untuk Keselamatan Kerja Karyawan(K3) Seperti Ear-Plug, Masker, Sarung Tangan, Dll 3</p>            
            <b-select v-model="form.page_9_48" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">9. Ruangan Penanganan Limbah (Padat Dan/Atau Cair)</p>
            <br />
            <p style="font-weight: bold;">Ruangan Penyimpanan Limbah (Padat Dan/Atau Cair) Sementara Apabila Limbah Dikelola Oleh Pihak Ketiga</p>            
            <b-select v-model="form.page_9_49" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Kontrak Kerjasama Dengan Pihak Ketiga</p>            
            <b-select v-model="form.page_9_50" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Fasilitas Pengolahan Limbah (Padat/Cair)</p>            
            <b-select v-model="form.page_9_51" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Rekaman Penyimpanan Dan/Atau Pengolahan Limbah (Padat/Cair)</p>            
            <b-select v-model="form.page_9_52" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <br />
            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); page8 = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); page10 = true" expanded>Next</b-button>
                </div>
            </div>                                   

        </section> 
        <section v-if="page10" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <br />
            <p style="font-weight: bold;">III. REALISASI PRODUK</p>
            <p style="font-weight: bold;">1. Penyiapan Bahan Baku Dan Bahan Pengemas</p>
            <br />
            <p style="font-weight: bold;">Tersedia Spesifikasi Bahan Baku Dan Bahan Pengemas</p>            
            <b-select v-model="form.page_10_1" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Certificate Of Analysis (COA)</p>            
            <b-select v-model="form.page_10_2" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Rekaman Penerimaan Bahan Baku Dan Bahan Pengemas</p>            
            <b-select v-model="form.page_10_3" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Rekaman Penyimpanan Bahan Baku Dan Bahan Pengemas</p>            
            <b-select v-model="form.page_10_4" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Rekaman Penimbangan Bahan Baku Dan Bahan Pengemas (Jika Ada)</p>            
            <b-select v-model="form.page_10_5" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Rekaman Dan Label Pelulusan/Penolakan Bahan Baku Dan Bahan Pengemas</p>            
            <b-select v-model="form.page_10_6" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />
            <p style="font-weight: bold;">Tersedia Rekaman Dan Label Penolakan Bahan Baku Dan Bahan Pengemas</p>            
            <b-select v-model="form.page_10_7" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />           
            <p style="font-weight: bold;">Tersedia Catatan/Kartu Stok Persediaan Bahan Baku Dan Bahan Pengemas</p>            
            <b-select v-model="form.page_10_8" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />           
            <p style="font-weight: bold;">Menerapkan Metode Penyimpanan Bahan Baku Dan Bahan Pengemas Secara (FIFO/ FEFO)</p>            
            <b-select v-model="form.page_10_9" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>            
            <br />           
            <p style="font-weight: bold;">2. Proses Produksi dan Pengemasan</p>            
            <br />           
            <p style="font-weight: bold;">Tersedia Rekaman Proses Produksi Dan Pengemasan</p>            
            <b-select v-model="form.page_10_10" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />           
            <p style="font-weight: bold;">Tersedia Rekaman Penggunaan Fasilitas Bersama (Jika Ada)</p>            
            <b-select v-model="form.page_10_11" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />           
            <p style="font-weight: bold;">Tersedia Nomor Izin Edar, Nomor Bets/Lot/Seri Dan Kadalwarsa Pada Kemasan Produk (Primer/Sekunder)</p>            
            <b-select v-model="form.page_10_12" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />           
            <p style="font-weight: bold;">Tersedia Rekaman Pembersihan/Pemeliharan Setiap Peralatan Produksi</p>            
            <b-select v-model="form.page_10_13" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />           
            <p style="font-weight: bold;">Tersedia Rekaman Pembersihan/Pemeliharaan Setiap Ruangan Produksi</p>            
            <b-select v-model="form.page_10_14" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />           
            <p style="font-weight: bold;">Tersedia Rekaman Penanganan Ketidak-Sesuaian Produk</p>            
            <b-select v-model="form.page_10_15" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />           
            <p style="font-weight: bold;">3. Pengawasan Mutu</p>             
            <br />           
            <p style="font-weight: bold;">Tersedia Rekaman Hasil Pengujian/Pemeriksaan Produk (In-Process Control Dan Produk Jadi)</p>            
            <b-select v-model="form.page_10_16" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />           
            <p style="font-weight: bold;">Tersedia Sampel Pertinggal Produk Atau Dokumen Pertinggal Produk Untuk Setiap Nomor Bets/Lot/Seri</p>            
            <b-select v-model="form.page_10_17" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">4. Penyimpanan Produk Jadi</p>            
            <br />           
            <p style="font-weight: bold;">Tersedia Rekaman Penyimpanan Produk Jadi</p>            
            <b-select v-model="form.page_10_18" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />           
            <p style="font-weight: bold;">Tersedia Rekaman Penyaluran Produk Jadi</p>            
            <b-select v-model="form.page_10_19" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />           
            <p style="font-weight: bold;">Menerapkan Metode Penyimpanan Dan Penyaluran Produk Jadi Secara (FIFO/ FEFO)</p>            
            <b-select v-model="form.page_10_20" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">5. Service dan Jaminan Purna Jual</p>            
            <br />           
            <p style="font-weight: bold;">Tersedia Rekaman Kalibrasi/Verifikasi Untuk Fasilitas Alat Periksa Atau Alat Ukur</p>            
            <b-select v-model="form.page_10_21" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />           
            <p style="font-weight: bold;">Tersedia Rekaman Layanan Jaminan Purna Jual Produk (Jika Ada)</p>            
            <b-select v-model="form.page_10_22" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">IV. KHUSUS</p>            
            <p style="font-weight: bold;">1. Pabrik Yang Memproduksi Alat Kesehatan Elektromedik Radiasi</p>            
            <br />           
            <p style="font-weight: bold;">Perusahaan Memiliki Ruangan Khusus Untuk Produksi</p>            
            <b-select v-model="form.page_10_23" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />           
            <p style="font-weight: bold;">Perusahaan Memiliki Peralatan Khusus Untuk Produksi</p>            
            <b-select v-model="form.page_10_24" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />           
            <p style="font-weight: bold;">Perusahaan Memiliki Pakaian Khusus Untuk Produksi</p>            
            <b-select v-model="form.page_10_25" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />           
            <p style="font-weight: bold;">Perusahaan Memiliki Petugas Pengatur Radiasi Yang Bersertifikat Dan Surat Izin Bekerja Dari BAPETEN</p>            
            <b-select v-model="form.page_10_26" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">2. Pabrik Yang Memproduksi Alat Kesehatan Non Elektromedik Steril</p>            
            <br />
            <p style="font-weight: bold;">Perusahaan Melakukan Sterilisasi, Jika YA, Sterilisasi Dilakukan Secara:</p><br />
            <div class="field">
                <b-checkbox v-model="form.page_10_27"
                    true-value="Yes"
                    false-value="No">
                    Aseptis
                </b-checkbox>
            </div>   
            <div class="field">
                <b-checkbox v-model="form.page_10_28"
                    true-value="Yes"
                    false-value="No">
                    Basah
                </b-checkbox>
            </div>   
            <div class="field">
                <b-checkbox v-model="form.page_10_29"
                    true-value="Yes"
                    false-value="No">
                    Kering
                </b-checkbox>
            </div>
            <div class="field">
                <b-checkbox v-model="form.page_10_30"
                    true-value="Yes"
                    false-value="No">
                    Sinar Gamma
                </b-checkbox>
            </div>
            <div class="field">
                <b-checkbox v-model="form.page_10_31"
                    true-value="Yes"
                    false-value="No">
                    Etilenoksida
                </b-checkbox>
            </div>
            <b-field label="Lainnya">
                <b-input size="is-medium" type="text" v-model="form.page_10_32" placeholder=""></b-input>
            </b-field>   
            <br />         
            <p style="font-weight: bold;">Perusahaan Memiliki Ruangan Khusus</p>            
            <b-select v-model="form.page_10_33" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />         
            <p style="font-weight: bold;">Perusahaan Memiliki Peralatan Khusus</p>            
            <b-select v-model="form.page_10_34" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />         
            <p style="font-weight: bold;">Perusahaan Memiliki Pakaian Khusus</p>            
            <b-select v-model="form.page_10_35" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />         
            <p style="font-weight: bold;">Perusahaan Memiliki Rekaman Validasi Steril</p>            
            <b-select v-model="form.page_10_36" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <b-field label="Jika TIDAK, Bekerjasama Dengan Fasilitas Sterilisasi Lain, Sebutkan ......">
                <b-input size="is-medium" type="text" v-model="form.page_10_37" placeholder=""></b-input>
            </b-field> 
            <br />         
            <p style="font-weight: bold;">Tersedia Rekaman Validasi Steril</p>            
            <b-select v-model="form.page_10_38" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>     
            <br />                  
            <p style="font-weight: bold;">3. Pabrik Yang Memproduksi Alat Kesehatan Diagnostik In Vitro</p>            
            <br />         
            <p style="font-weight: bold;">Perusahaan Memiliki Ruangan Khusus</p>            
            <b-select v-model="form.page_10_39" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />         
            <p style="font-weight: bold;">Perusahaan Memiliki Peralatan Khusus</p>            
            <b-select v-model="form.page_10_40" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />         
            <p style="font-weight: bold;">Perusahaan Memiliki Pakaian Khusus</p>            
            <b-select v-model="form.page_10_41" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />         
            <p style="font-weight: bold;">Perusahaan Memiliki Rekaman Validasi Kontrol Suhu Pada Cool Storage/Kulkas</p>            
            <b-select v-model="form.page_10_42" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select> 
            <br />
            <p style="font-weight: bold;">4. Pabrik Yang Memproduksi Perbekalan Kesehatan Rumah Tangga (Untuk Produk Tertentu)</p> 
            <br />         
            <p style="font-weight: bold;">Perusahaan Memiliki Ruang Penyimpanan Limbah Bahan Beracun Dan Berbahaya (B3) Sementara, Apabila Dikelola Oleh Pihak Ketiga, Jika Ada</p>            
            <b-select v-model="form.page_10_43" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>                        
            <br />         
            <p style="font-weight: bold;">Perusahaan Memiliki Fasilitas Pengolahan Limbah B3, Jika Ada</p>            
            <b-select v-model="form.page_10_44" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>      
            <br />                  
            <p style="font-weight: bold;">V. PENGUKURAN, ANALISA DAN PERBAIKAN</p>            
            <p style="font-weight: bold;">1. Penanganan Produk Kembalian (Return), Penarikan Produk (Recall), Pemusnahan Produk Dan Sampling Produk</p>            
            <br />         
            <p style="font-weight: bold;">Tersedia Rekaman Penanganan Produk Kembalian (Jika Ada)</p>            
            <b-select v-model="form.page_10_45" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />         
            <p style="font-weight: bold;">Tersedia Rekaman Penarikan Produk (Jika Ada)</p>            
            <b-select v-model="form.page_10_46" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />         
            <p style="font-weight: bold;">Tersedia Rekaman Pemusnahan Produk (Jika Ada, Lampirkan)</p>            
            <b-select v-model="form.page_10_47" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />         
            <p style="font-weight: bold;">Tersedia Laporan Sampling Produk Pada Peredaran</p>            
            <b-select v-model="form.page_10_48" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">2. Tindakan Koreksi Dan Pencegahan Atau CAPA (Corective Action Preventive Action)</p>            
            <br />         
            <p style="font-weight: bold;">Tersedia Rekaman Keluhan Dan Penanganan Keluhan Pelanggan Atau Customer Feedback (Jika Ada)</p>            
            <b-select v-model="form.page_10_49" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />         
            <p style="font-weight: bold;">Tersedia Rekaman Tindakan Perbaikan Dan Pencegahan (Jika Ada)</p>            
            <b-select v-model="form.page_10_50" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">3. Audit Mutu Internal</p>            
            <br />         
            <p style="font-weight: bold;">Tersedia Program Audit Internal (Tim Dan Jadwal)</p>            
            <b-select v-model="form.page_10_51" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />         
            <p style="font-weight: bold;">Tersedia Rekaman Tindak Lanjut Setiap Temuan Audit Internal</p>            
            <b-select v-model="form.page_10_52" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <br />

            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); page9 = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); page11 = true" expanded>Next</b-button>
                </div>
            </div>                                   

        </section>                                                                        
<!-- PAGE EMPAT BELAS -->
        <section v-if="page11" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <br />
            <p style="font-weight: bold;">VI. SARANA DAN PRASARANA PENDUKUNG</p>
            <br />         
            <p style="font-weight: bold;">Tersedia Jaminan Kesehatan Karyawan (BPJS)</p>   
            <b-select v-model="form.page_11_1" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />         
            <p style="font-weight: bold;">Tersedia Fasilitas P3K Untuk Karyawan</p>   
            <b-select v-model="form.page_11_2" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />         
            <p style="font-weight: bold;">Tersedia Toilet Dan Kamar Ganti</p>   
            <b-select v-model="form.page_11_3" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />         
            <p style="font-weight: bold;">Tersedia Sarana Ibadah</p>   
            <b-select v-model="form.page_11_4" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />         
            <p style="font-weight: bold;">Tersedia Kantin</p>   
            <b-select v-model="form.page_11_5" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />         
            <p style="font-weight: bold;">Tersedia Fasilitas Penunjang Untuk Ibu Menyusui</p>   
            <b-select v-model="form.page_11_6" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">VII. SANITASI DAN HIGIENE</p>  
            <br /> 
            <p style="font-weight: bold;">Tersedia Peraturan Harus Mencuci Tangan Dengan Sabun Sebelum Memasuki Ruang Produksi (Sesuai Produk)</p>   
            <b-select v-model="form.page_11_7" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br /> 
            <p style="font-weight: bold;">Tersedia Peraturan Dilarang Makan, Minum Dan Merokok Di Ruang Perusahaan.</p>   
            <b-select v-model="form.page_11_8" placeholder="Pilihan" expanded>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
            </b-select>
            <br />
            <p style="font-weight: bold;">Kesimpulan, Saran dan Tindak Lanjut<br />
Berikan Kesimpulan, Saran dan Tindak Lanjut dari Hasil Inspeksi Perusahaan.</p>   
            <b-field label="Kesimpulan">
                <b-input size="is-medium" type="text" v-model="form.page_11_9" placeholder=""></b-input>
            </b-field>
            <br />
            <b-field label="Saran dan Tindak Lanjut">
                <b-input size="is-medium" type="text" v-model="form.page_11_10" placeholder=""></b-input>
            </b-field>
            <p>
Upload Data Dukung Hasil Inspeksi<br />
Upload data dukung hasil inspeksi dalam 1(satu) file format PDF diantaranya:<br />
1. Nomor Sertifikat Produksi yang masih berlaku <br />
2. Nama Alat Kesehatan/PKRT Yang Masih Diproduksi/Aktif<br /> 
3. Petugas Proteksi Radiasi (PPR)<br />
4. Perusahaan Telah Melapor Kejadian Tidak Diinginkan/ KTD (E-Watch) - (Jika Ada, Lampirkan)<br />
5. Tersedia Rekaman Pemusnahan Produk (Jika Ada, Lampirkan)<br />
            </p>

            <br />
            <p style="font-weight: bold;">Upload Data Dalam 1 File PDF</p>
            <ul>
                <li v-if="files.length > 0" v-for="(item, index) in files">
                    <img @click="clickImage(index)" style="width: 100%;" src="http://202.150.151.50/e-mosi/public-assets/images/doc-icon.png" />
                </li>
            </ul>    
            <file-upload
                ref="upload"
                :multiple="true"
                v-model="files"
                post-action="http://202.150.151.50/api-e-mosi/public/upload"
                @input="onChangeFile"
            >
                <img style="width: 60px;" :src="`${this.$assets}/images/upload-icon.png`" />
                
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
                page10: false,
                page11: false,
                files: []
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
                this.page10  = false
                this.page11  = false
            },

            clickImage: function(id) {
                const index = this.files.indexOf(id);
                this.$buefy.dialog.confirm({
                    message: 'Apakah anda yakin ingin menghapus file ini?',
                    onConfirm: () => {                    
                        this.files.splice(index)
                        this.$buefy.toast.open({
                            message: `File berhasil dihapus`,
                            position: 'is-bottom',
                            type: 'is-success'
                        })  
                    }
                })      
            },            

            submitProses: function() {
                console.log(this.form)
                this.isLoading = true;
                let data = {
                    DATA: this.form,
                    DATA_FILE: this.files,
                    USERNAME: this.username,
                    LONGLAT: this.longlat,
                    JENIS: 'inspeksipakpkrt'
                };
                this.$http.post(this.$api + '/input-monev', qs.stringify(data))
                    .then((res) => {
                        this.isLoading = false;
                        if(res.data.status == true) {
                            this.$buefy.dialog.alert('Monev berhasil ditambahkan!')
                            this.clearPage();
                            this.pageSatu = true
                            this.form = []
                            this.files = []
                        } else {
                            this.$buefy.dialog.alert('Ops! Terjadi Kesalahan.')
                        }
                    })                 
            },

            onChangeFile: function(e) {
                // console.log('change file' + e)
                this.$refs.upload.active = true
                console.log(this.files)
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
            console.log(this.username)
            console.log(this.longlat)
        }
    }
</script>
