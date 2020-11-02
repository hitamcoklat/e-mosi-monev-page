<template>
    <div style="max-width: 450px; padding: 0px;" class="container">
        <!-- PAGE SATU -->
        <section v-if="pageSatu" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">            
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
            <p style="font-weight: bold;">Deskripsi Singkat Perusahaan</p>
            <b-field label="Nama PBF">
                <b-input size="is-medium" type="text" v-model="form.nama_pbf" placeholder="Masukan Nama PBF"></b-input>
            </b-field>
            <b-field label="Alamat PBF">
                <b-input size="is-medium" type="text" v-model="form.alamat_pbf" placeholder="Masukan Alamat PBF"></b-input>
            </b-field>
            <b-field label="Pilih Kabupaten/Kota">
                <b-select v-model="form.kab_kota" placeholder="Pilih Kab/Kota" required expanded>
                    <option v-for="(item, index) in listKabkot" :key="index" :ref="index" :value="item">{{item}}</option>
                </b-select>
            </b-field>            
            <b-field label="Status PBF">
                <b-select v-model="form.status_pbf" placeholder="Status PBF" expanded>
                    <option value="Pusat">Pusat</option>
                    <option value="Cabang">Cabang</option>
                </b-select>
            </b-field>            
            <b-field label="Jenis PBF">
                <b-select v-model="form.jenis_pbf" placeholder="Jenis PBF" expanded>
                    <option value="Obat Jadi">Obat Jadi</option>
                    <option value="Bahan Baku Obat">Bahan Baku Obat</option>
                </b-select>
            </b-field>

            <div class="buttons">
                <b-button style="width: 46.3%; margin-right: 1em;" v-on:click="saveDraft();" type="is-warning is-large" expanded>Save Draft</b-button>
                <b-button style="width: 46.3%;" v-on:click="clearPage(); pageDua = true" type="is-primary is-large" expanded>Next</b-button>
                <!-- <b-button v-on:click="submitProses();" type="is-primary is-large" expanded>Submit</b-button> -->
            </div>        
  
        </section>

        <!-- PAGE DUA -->
        <section v-if="pageDua" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <div style="background-color: #EEECD6; padding: 10px;">
                <p style="color: black; font-weight: bold;">Izin Sarana Kefarmasian (PBF)</p>
                <br />
                <p style="color: black; text-align: justify;">
Dilakukan pemeriksaan terhadap Izin yang dimiliki oleh sarana kefarmasian meliputi pemeriksaan terhadap :
<br />
<ul>
    <li>a. Nomor dan tanggal terbit izin;</li>
    <li>b. Instansi penerbit izin;</li>
    <li>c. Masa berlaku izin</li>
    <li>d. Kesesuaian dengan kelengkapan administratif</li>
    <li>e. Wajib melakukan pemutakhiran data di elic.binfar.kemkes.go.id</li>
</ul>
<br />
Kondisi/Resiko :
Jika diketahui bahwa izin sarana kefarmasian sudah tidak berlaku, maka harus diambil tindakan agar sarana kefarmasian memperbaharui sarananya serta harus disusun mitigasi untuk mengatasi resiko yang ada                    
                </p>
            </div>
            <br />
            <b-field label="Nomor Izin PBF">
                <b-input size="is-medium" type="text" v-model="form.no_izin_pbf" placeholder="Nomor Izin PBF"></b-input>
            </b-field>
            <b-field label="Tanggal Terbit Izin PBF">
                <b-input size="is-medium" type="text" v-model="form.tgl_terbit_izin" placeholder="Tanggal Terbit Izin PBF"></b-input>
            </b-field>
            <b-field label="Hasil Tinjauan">
                <b-input size="is-medium" type="text" v-model="form.hasil_tinjauan" placeholder="Hasil Tinjauan"></b-input>
            </b-field>
            <br />            

            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); pageSatu = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); pageTiga = true" expanded>Next</b-button>
                </div>
            </div>              

        </section>

<!-- PAGE TIGA -->
        <section v-if="pageTiga" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <div style="background-color: #EEECD6; padding: 10px;">
                <p style="color: black; font-weight: bold;">Sertifikat CDOB dari BPOM dan/atau Rekomendasi Pemenuhan Aspek CDOB</p>
                <br />
                <p style="color: black; text-align: justify;">
Dilakukan pemeriksaan terhadap :
<br />
<ul>
    <li>a. Sertifikat CDOB termasuk masa berlaku</li>
    <li>b. Surat Rekomendasi Pemenuhan Aspek CDOB </li>
</ul>
<br />
Kondisi/Resiko
Jika diketahui sarana kefarmasian tidak memiliki sertifikat dari BPOM maka tindakan yang perlu diambil adalah dengan memberikan pembinaan teknis agar sarana dapat memenuhi persyaratan sehingga dapat mengajukan untuk mendapatkan sertifikat dari BPOM, karena Cdob sudah Mandatory                   
                </p>
            </div>
            <br />
            <b-field label="Sertifikat CDOB dari BPOM dan/atau Rekomendasi Pemenuhan Aspek CDOB">
                <b-input size="is-medium" type="text" v-model="form.sertifikat_codb" placeholder="Sertifikat CDOB dari BPOM dan/atau Rekomendasi Pemenuhan Aspek CDOB"></b-input>
            </b-field>
            <br /> 

            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); pageDua = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); pageEmpat = true" expanded>Next</b-button>
                </div>
            </div>                                   

        </section>  

<!-- PAGE EMPAT -->
        <section v-if="pageEmpat" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <div style="background-color: #EEECD6; padding: 10px;">
                <p style="color: black; font-weight: bold;">Izin OSS</p>
                <br />
                <p style="color: black; text-align: left;">
Pemeriksaan dimaksudkan untuk memeriksa kesesuaian dokumen yang ada, sehingga sarana kefarmasian terjamin legalitasnya. Resiko yang harus dimitigasi ialah keabsahan dan masa berlaku dokumen tersebut.
<br />
<br />
NIB, IZIN  LOKASI, IZIN USAHA DAN IZIN OPERASIONAL/KOMERSIAL ( WAJIB KBLI 46492, 46693 )                 
                </p>
            </div>
            <br />
            <b-field label="NIB ( Nomor Induk Berusaha)">
                <b-input size="is-medium" type="text" v-model="form.nib" placeholder="NIB ( Nomor Induk Berusaha)"></b-input>
            </b-field>
            <b-field label="Izin OSS">
                <b-input size="is-medium" type="text" v-model="form.izin_oss" placeholder="Izin OSS"></b-input>
            </b-field>
            <br /> 

            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); pageTiga = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); pageLima = true" expanded>Next</b-button>
                </div>
            </div>        

        </section>   

<!-- PAGE LIMA -->
        <section v-if="pageLima" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <div style="background-color: #EEECD6; padding: 10px;">
                <p style="color: black; font-weight: bold;">DATA APOTEKER PENANGGUNG JAWAB</p>
                <br />
                <p style="color: black; text-align: left;">
Dilakukan pemeriksaan apakah sarana kefarmasian memiliki Apoteker Penanggung Jawab sesuai dengan yang dipersyaratkan oleh Peraturan Perundang-Undangan.
Pemeriksaan meliputi : 
<ul>
    <li>a. Ijazah Apoteker</li>
    <li>b. STRA Apoteker ( Wajib masih berlaku ) </li>
    <li>c. SIPA Apoteker  ( Wajib masih berlaku ) </li>
    <li>d. Sertifikat terkait peningkatan kapasitas APJ (cdob) </li>
    <li>e. Surat Perjanjian Kerja APJ dan Pemilik Sarana </li>
</ul>             
                </p>
            </div>
            <br />
            <b-field label="NAMA APOTEKER PENANGGUNG JAWAB">
                <b-input size="is-medium" type="text" v-model="form.nama_apoteker" placeholder="NAMA APOTEKER PENANGGUNG JAWAB"></b-input>
            </b-field>
            <p style="font-weight: bold;">Pada Saat Pemeriksaan APJ ada ditempat ?</p>
            <b-select v-model="form.pemeriksaan_apj_ada_ditempat" placeholder="Pilihan" expanded>
                <option value="Ada">Ada</option>
                <option value="Tidak Ada">Tidak Ada</option>
                <option value="Lainnya">Lainnya</option>
            </b-select>
            <b-field label="Alasan Lainnya">
                <b-input size="is-medium" type="text" v-model="form.lainnya" placeholder="Alasan Lainnya"></b-input>
            </b-field>
            <b-field label="Nomor STRA">
                <b-input size="is-medium" type="text" v-model="form.no_stra" placeholder="Nomor STRA"></b-input>
            </b-field>
            <b-field label="Masa Berlaku STRA">
                <b-input size="is-medium" type="date" v-model="form.masa_berlaku_stra" placeholder="Masa Berlaku STRA"></b-input>
            </b-field>
            <b-field label="Nomor SIPA">
                <b-input size="is-medium" type="text" v-model="form.no_sipa" placeholder="Nomor SIPA"></b-input>
            </b-field>
            <b-field label="Masa Berlaku SIPA">
                <b-input size="is-medium" type="date" v-model="form.masa_berlaku_sipa" placeholder="Masa Berlaku SIPA"></b-input>
            </b-field>            
            <br />

            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); pageEmpat = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); pageEnam = true" expanded>Next</b-button>
                </div>
            </div>             

        </section>   

<!-- PAGE ENAM -->
        <section v-if="pageEnam" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <div style="background-color: #EEECD6; padding: 10px;">
                <p style="color: black; font-weight: bold;">Gudang/Tempat penyimpanan Obat</p>
                <br />
                <p style="color: black; text-align: left;">
Dilakukan pemeriksaan terhadap kesesuaian  
<ul>
    <li>a. Layout sesuai dengan pedoman teknis</li>
    <li>b. Tata letak tempat penyimpanan sediaan farmasi</li>
    <li>c. Lemari dan rak penyimpanan, Palet</li>
    <li>d. Peralatan pendukung lainnya pest control</li>
    <li>e. Tersedianya alat pengontrol suhu (AC) dan alat pemantau suhu (Thermohygrometer) yang terkalibrasi</li>
</ul>             
<br />
Kondisi/Resiko
<br />
Layout gudang sesuai dengan yang dipersyaratkan untuk menjamin obat yang didistribusikan terjamin keamanan, mutu dan khasiat. Harus dicek kemungkinan tempat penyimpanan sediaan farmasi yang tidak sesuai atau kemungkinan tempat penyembunyian produk ilegal.
                </p>
            </div>
            <br />
            <b-field label="Gudang/Tempat penyimpanan Obat">
                <b-input size="is-medium" type="text" v-model="form.gudang_penyimpanan_obat" placeholder="Gudang/Tempat penyimpanan Obat"></b-input>
            </b-field>
            <br />

            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); pageLima = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); pageTujuh = true" expanded>Next</b-button>
                </div>
            </div>        

        </section>

<!-- PAGE TUJUH -->
        <section v-if="pageTujuh" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <div style="background-color: #EEECD6; padding: 10px;">
                <p style="color: black; font-weight: bold;">DOKUMENTASI</p>
                <br />
                <p style="color: black; text-align: left;">
Pemeriksaan kesesuaian terhadap kartu stok, faktur, surat pesanan.
Kondisi/Resiko :
Sesuai dengan peraturan dan prosedur yang berlaku untuk menghindari pemasukan sediaan farmasi illegal ke dalam sarana legal yang akan didistribusikan kepada masyarakat.   

                </p>
            </div>
            <br />
            <b-field label="Dokumentasi">
                <b-input size="is-medium" type="text" v-model="form.dokumentasi" placeholder="Dokumentasi"></b-input>
            </b-field>
            <br />

            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); pageEnam = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); pageDelapan = true" expanded>Next</b-button>
                </div>
            </div>            

        </section>      

<!-- PAGE DELAPAN -->
        <section v-if="pageDelapan" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <div style="background-color: #EEECD6; padding: 10px;">
                <p style="color: black; font-weight: bold;">Job description (APJ)</p>
                <br />
                <p style="color: black; text-align: left;">
Diperiksa apakah sarana kefarmasian memiliki job description untuk masing- masing personel/bagian. Dilakukan wawancara pada personel/bagian untuk mengetahui sejauh mana kepahaman terhadap job description.:<br />
Kondisi / Resiko :<br />
Sesuai dengan peraturan dan CDOB serta setiap personel/bagian memahami job description tersebut serta mampu melaksanakannya. 
Penting sekali otoritas APJ kewenangan full terkait Quality Assurance (QA) 

                </p>
            </div>
            <br />
            <b-field label="Job description (APJ)">
                <b-input size="is-medium" type="text" v-model="form.job_description" placeholder="Job description (APJ)"></b-input>
            </b-field>
            <br />

            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); pageTujuh = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); pageSembilan = true" expanded>Next</b-button>
                </div>
            </div>        

        </section>  

<!-- PAGE SEMBILAN -->
        <section v-if="pageSembilan" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <div style="background-color: #EEECD6; padding: 10px;">
                <p style="color: black; font-weight: bold;">Job description (APJ)</p>
                <br />
                <p style="color: black; text-align: left;">
Alur proses perolehan sediaan farmasi dan distribusi
Diperiksa apakah alur perolehan sediaan farmasi dan distribusi telah sesuai dengan peraturan yang berlaku, pedoman teknis CDOB dan petunjuk pelaksanaan CDOB
Periksa SOP pendistribusian
<br />
Kondisi/Resiko :<br /> 
Sesuai dengan peraturan dan CDOB serta dilaksanakan dengan baik dan kontinyu. Periksa resiko ketidaksesuaian cara dan sumber perolehan sediaan farmasi serta periksa sarana yang didistribusikan bila tidak sesuai 

                </p>
            </div>
            <br />
            <b-field label="Alur proses perolehan sediaan farmasi dan distribusi">
                <b-input size="is-medium" type="text" v-model="form.alur_proses" placeholder="Alur proses perolehan sediaan farmasi dan distribusi"></b-input>
            </b-field>
            <br />

            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); pageDelapan = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); pageSepuluh = true" expanded>Next</b-button>
                </div>
            </div>         

        </section>  

<!-- PAGE SEPULUH -->
        <section v-if="pageSepuluh" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <div style="background-color: #EEECD6; padding: 10px;">
                <p style="color: black; font-weight: bold;">Pelaporan/Ereport PBF</p>
                <br />
                <p style="color: black; text-align: left;">
Rutin melakukan pelaporan sesuai peraturan perundang-undangan dengan tingkat akurasi dan validitas yang tinggi, serta tepat waktu...
<br />
Mohon ditulis periode terakhir melaporkan yaa....!!!
Laporan 3 bulanan dengan format lama (2018) dan format baru wajib untuk tahun 2019

                </p>
            </div>
            <br />
            <b-field label="Periode Terakhir Melaporkan ereport">
                <b-input size="is-medium" type="text" v-model="form.lapor_ereport" placeholder="Periode Terakhir Melaporkan ereport"></b-input>
            </b-field>
            <br />

            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); pageSembilan = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); pageSebelas = true" expanded>Next</b-button>
                </div>
            </div>

        </section>  

<!-- PAGE SEBELAS -->
        <section v-if="pageSebelas" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <div style="background-color: #EEECD6; padding: 10px;">
                <p style="color: black; font-weight: bold;">Data Upstream Supplier (Asal perolehan Obat)</p>
                <br />
                <p style="color: black; text-align: left;">
Diperiksa data upstream supplier (industri farmasi, PBF lain, dan sumber lain) yang merupakan sumber perolehan sediaan farmasi di PBF:
<ul>
    <li>a.	Izin sarana ( jika perolehan obat dari PBF apakah izin PBF tsb di verifikasi dan terdokumentasi )</li>
    <li>b.	Berita Acara Kualifikasi supplier</li>
    <li>c.	Kontrak</li>
    <li>d.	SOP terkait </li>
    <li>e.	Dokumen lain yang terkait</li>
</ul>
<br />
Harus sesuai peraturan perundang-undangan, tervalidasi, dan terkualifikasi. Harus diwaspadai bilamana ada sediaan farmasi yang diperoleh dari sumber yang tidak jelas (seperti pada kasus konsinyasi produk, dsb)
                </p>
            </div>
            <br />
            <b-field label="Hasil Tinjauan asal perolehan obat">
                <b-input size="is-medium" type="text" v-model="form.hasil_tinjauan_asal_obat" placeholder="Hasil Tinjauan asal perolehan obat"></b-input>
            </b-field>
            <br />

            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); pageSepuluh = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); pageDuaBelas = true" expanded>Next</b-button>
                </div>
            </div>     

        </section>     

<!-- PAGE DUA BELAS -->
        <section v-if="pageDuaBelas" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <div style="background-color: #EEECD6; padding: 10px;">
                <p style="color: black; font-weight: bold;">Data Downstream Supplier (Pendistribusian Obat)</p>
                <br />
                <p style="color: black; text-align: left;">
Diperiksa data downstream supplier (PBF, Apotek, Toko Obat, Klinik, Puskesmas, IFRS, Instalasi Farmasi Provinsi/Kab/Kota):
<ul>
    <li>a.	Izin sarana terdokumentasi dan dan dibuat list ( outlet kadaluarsa tidak bisa dikasih obat)</li>
    <li>b.	Berita Acara Kualifikasi supplier</li>
    <li>c.	Kontrak</li>
    <li>d.	SOP terkait </li>
    <li>e.	Dokumen lain yang terkait</li>
</ul>
<br />
Harus sesuai peraturan perundang-undangan, tervalidasi, dan terkualifikasi. Harus diwaspadai bilamana ada sediaan farmasi yang didistribusikan ke sarana yang tidak jelas atau perorangan
                </p>
            </div>
            <br />
            <b-field label="Hasil Tinjauan pendistribusian obat">
                <b-input size="is-medium" type="text" v-model="form.hasil_tinjauan_distribusi_obat" placeholder="Hasil Tinjauan pendistribusian obat"></b-input>
            </b-field>
            <br />

            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); pageSebelas = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); pageTigaBelas = true" expanded>Next</b-button>
                </div>
            </div>        

        </section>    

<!-- PAGE TIGA BELAS -->
        <section v-if="pageTigaBelas" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <div style="background-color: #EEECD6; padding: 10px;">
                <p style="color: black; font-weight: bold;">Adanya Temuan dari BPOM (jika Ada)</p>
                <br />
                <p style="color: black; text-align: left;">
Tanyakan kepada PBF tersebut apakah pernah mendapat temuan dari BPOM, apabila ada konfirmasi apakah CAPA ( Corrective Action Preventive Action ) sudah disampaikan ke BPOM cc Ke Dinkes Provinsi.
                </p>
            </div>
            <br />
            <b-field label="Teguran BPOM">
                <b-select v-model="form.teguran_bpom" placeholder="Pilih Teguran BPOM" expanded>
                    <option value="Peringatan">Peringatan</option>
                    <option value="Peringatan Keras">Peringatan Keras</option>
                    <option value="Penghentian Sementara Kegiatan">Penghentian Sementara Kegiatan</option>
                    <option value="Pencabutan Izin">Pencabutan Izin</option>
                    <option value="Tidak ada">Tidak ada</option>
                </b-select>
            </b-field> 
            <b-field label="Progress CAPA ( corrective action preventive action)">
                <b-input size="is-medium" type="text" v-model="form.progres_capa" placeholder="rogress CAPA"></b-input>
            </b-field>            
            <b-field label="Komitmen penyelesaian CAPA">
                <b-input size="is-medium" type="date" v-model="form.komitment_penyelesaian_capa" placeholder="Komitmen penyelesaian CAPA"></b-input>
            </b-field>            
            <br />

            <div class="columns is-mobile">
                <div class="column is-half">
                    <b-button type="is-warning is-large" v-on:click="clearPage(); pageDuaBelas = true" expanded>Kembali</b-button>
                </div>
                <div class="column is-half">
                    <b-button type="is-primary is-large" v-on:click="clearPage(); pageEmpatBelas = true" expanded>Next</b-button>
                </div>
            </div>             

        </section>  

<!-- PAGE EMPAT BELAS -->
        <section v-if="pageEmpatBelas" style="padding-left: 1em; padding-right: 1em; padding-top: 1em;">
            <div style="background-color: #EEECD6; padding: 10px;">
                <p style="color: black; font-weight: bold;">Dokumentasi Foto Sarana dan Temuan</p>
                <br />
                <p style="color: black; text-align: left;">
                Wajib di upload dalam file PDF yaa...
                <ul>
                    <li>1. foto tampak depan PBF</li>
                    <li>2. Foto izin PBF, Stra, Sipa, daftar supllier</li>
                    <li>3. Temuan lain (Jika Ada) yang dianggap penting</li>
                </ul>
                <br />
                Note : download dulu di HP aplikasi Camscanner.
                </p>
            </div>
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
                    <b-button type="is-warning is-large" v-on:click="clearPage(); pageTigaBelas = true" expanded>Kembali</b-button>
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
                pageSatu: true,
                pageDua: false,
                pageTiga: false,
                pageEmpat: false,
                pageLima: false,
                pageEnam: false,
                pageTujuh: false,
                pageDelapan: false,
                pageSembilan: false,
                pageSepuluh: false,
                pageSebelas: false,
                pageDuaBelas: false,
                pageTigaBelas: false,
                pageEmpatBelas: false,
                files: [],
                namaFiles: [],
                fotoLokasi: [],
                isUpdate: false
            }
        },
        methods: {
            
            clearPage: function() {
                this.pageSatu       = false
                this.pageDua        = false
                this.pageTiga       = false
                this.pageEmpat      = false
                this.pageLima       = false
                this.pageEnam       = false
                this.pageTujuh      = false
                this.pageDelapan    = false
                this.pageSembilan   = false
                this.pageSepuluh    = false
                this.pageSebelas    = false
                this.pageDuaBelas   = false
                this.pageTigaBelas  = false
                this.pageEmpatBelas = false
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
                this.$http.get(this.$api + '/read-monev?id=' + id + '&jenis=monevpbf')
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
                    JENIS: 'pbf'
                };
                
                let urlPost = (this.isUpdate == true) ? this.$api + '/update-monev?id=' + this.$route.query.id + '&jenis=monevpbf' : this.$api + '/input-monev';

                this.$http.post(urlPost, qs.stringify(data))
                    .then((res) => {
                        this.isLoading = false;
                        if(res.data.status == true) {
                            this.$buefy.dialog.alert('Monev berhasil ditambahkan!')
                            this.clearPage();
                            this.pageSatu = true
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
