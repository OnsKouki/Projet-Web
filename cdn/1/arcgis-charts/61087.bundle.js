/*! For license information please see 61087.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[61087],{61087:(a,i,e)=>{e.r(i),e.d(i,{additionalProperty:()=>c,anyOfValues:()=>$,bubbleChartValidateMsg:()=>y,default:()=>D,defaultError:()=>t,defaultInvalidChart:()=>d,duplicateSeriesID:()=>u,enumValues:()=>C,gaugeCannotExceedLimit:()=>T,histogramEmptyField:()=>P,invalidSeriesType:()=>x,layerLoadFailure:()=>s,lineChartMarkersCannotExceedLimit:()=>A,lineChartSeriesAndMarkersCannotExceedLimit:()=>v,maxItems:()=>b,minItems:()=>p,minLength:()=>h,negativeValueInDataForLogTransformation:()=>m,negativeValueInDataForSqrtTransformation:()=>o,nonNumericAggregation:()=>k,or:()=>S,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:()=>E,pieChartSlicesCannotExceedLimit:()=>I,queryError:()=>L,requiredProperty:()=>g,threePlusSeriesBarCountCannotExceedLimit:()=>l,twoSeriesBarCountCannotExceedLimit:()=>r,uniqueSeriesBarCountCannotExceedLimit:()=>n,whiteSpacePattern:()=>f});const t="Terjadi kesalahan saat memuat grafik.",n="Ada total ${ elementCount } bilah untuk diagram ini. Grafik batang dengan satu rangkaian dibatasi menjadi ${ totalLimit } batang. Pilih kolom Kategori dengan nilai unik yang lebih sedikit atau terapkan filter ke data Anda.",r="Grafik batang dengan dua rangkaian dibatasi menjadi ${ totalLimit } batang, atau ${ seriesLimit } batang per rangkaian. Pilih kolom Kategori dengan nilai unik yang lebih sedikit atau terapkan filter ke data Anda.",l="Grafik batang dengan tiga rangkaian atau lebih dibatasi menjadi ${ totalLimit } batang, atau ${ seriesLimit } batang per rangkaian. Pilih kolom Kategori dengan nilai unik yang lebih sedikit atau terapkan filter ke data Anda.",d="Terjadi kesalahan saat membuat grafik.",m="Tidak dapat menerapkan transformasi log ke nilai negatif atau nol.",o="Tidak dapat menerapkan transformasi akar pangkat dua ke nilai negatif.",s="Terjadi kesalahan saat memuat layer. URL = ${ url }. ID item portal = ${ portalItemId }.",u="${ dataPath } harus unik. Rangkaian yang bernama ${ seriesName } memiliki ID (${ seriesID }) yang sudah digunakan oleh rangkaian lain.",k="${ dataPath } tidak dapat melakukan agregasi non-hitungan di kolom non-numerik.",g="${ dataPath } tidak memiliki properti bernama ${ missingProperty }.",h="${ dataPath } tidak boleh lebih pendek dari ${ limit } karakter.",p="${ dataPath } tidak boleh memiliki kurang dari ${ limit } item.",b="${ dataPath } tidak boleh memiliki lebih dari ${ limit } item.",f="${ dataPath } harus memiliki setidaknya satu karakter non-spasi.",c="${ dataPath } tidak boleh memiliki ${ additionalProperty }.",C="${ dataPath } harus sama dengan salah satu nilai yang diizinkan ini: ${ allowedValues }.",$="${ dataPath } harus cocok dengan skema salah satu dari ini: ${ schemaOptions }.",y="Scatter plot dengan simbol proporsional tidak didukung. Ukuran simbol default sudah diterapkan.",L="Gagal membaca input data.",P="Histogram memerlukan minimal dua nilai numerik.",x="Jenis seri yang diharapkan pada indeks ${ seriesIndex } adalah '${ expectedType }' tetapi '${ receivedType }' diterima sebagai gantinya",S="atau",E="Pastikan total jumlah kolom numerik yang dipilih mengembalikan semua nilai positif atau semua nilai negatif.",I="Ada total ${ sliceCount } irisan dalam diagram ini. Diagram pai dibatasi hingga ${ totalLimit } irisan. Pilih kolom Kategori dengan nilai unik yang lebih sedikit, tambahkan kolom Numerik yang lebih sedikit, atau terapkan filter ke data Anda.",T="Pengukur berbasis fitur terbatas ${ totalLimit } fitur. Filter data Anda",v="Total terdapat ${ seriesCount } rangkaian dan ${ elementCount } titik data di diagram ini. Diagram garis hanya boleh memiliki ${ seriesLimit } rangkaian dan ${ totalLimit } titik data. Kurangi jumlah rangkaian dan/atau agregasi ulang atau filter data Anda.",A="Diagram garis hanya boleh memiliki ${ totalLimit } titik data. Filter atau agregasi ulang data Anda dan coba lagi.",D={defaultError:t,uniqueSeriesBarCountCannotExceedLimit:n,twoSeriesBarCountCannotExceedLimit:r,threePlusSeriesBarCountCannotExceedLimit:l,defaultInvalidChart:"Terjadi kesalahan saat membuat grafik.",negativeValueInDataForLogTransformation:"Tidak dapat menerapkan transformasi log ke nilai negatif atau nol.",negativeValueInDataForSqrtTransformation:"Tidak dapat menerapkan transformasi akar pangkat dua ke nilai negatif.",layerLoadFailure:s,duplicateSeriesID:u,nonNumericAggregation:k,requiredProperty:g,minLength:h,minItems:p,maxItems:b,whiteSpacePattern:f,additionalProperty:c,enumValues:C,anyOfValues:$,bubbleChartValidateMsg:y,queryError:"Gagal membaca input data.",histogramEmptyField:"Histogram memerlukan minimal dua nilai numerik.",invalidSeriesType:x,or:"atau",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Pastikan total jumlah kolom numerik yang dipilih mengembalikan semua nilai positif atau semua nilai negatif.",pieChartSlicesCannotExceedLimit:I,gaugeCannotExceedLimit:T,lineChartSeriesAndMarkersCannotExceedLimit:v,lineChartMarkersCannotExceedLimit:A}}}]);