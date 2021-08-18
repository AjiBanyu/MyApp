=========== PEMBUATAN FOLDER-FOLDER ============
>> 1. membuat folder src
>> 2. di dalam folder src terdapat beberapa folder
         - folder assets > berisi folder gambar atau icon yang di butuhkan 
         - folder component > berisi folder component-component kecil dan komplex 
         - folder pages > berisi kumpulan component 
         - folder utils
         - file App.js > file yang isinya kumpulan komponen yang di panggil dari folder pages
         - folder router > folder ini berisi tentang navigatior/navigati 

=========== MEMBUAT CUSTOM FONT =========
>> file font di letakkan pada folder 
>> copy kan folder assets font ke folderProjectKita > folder android > Folder App > folder src > folder main lalu paste di folder main

=========== UNTUK MEMANGGIL FILE GAMBAR .SVG DENGAN LIBRARY REACT-NATIVE-SVG=========
>> 1. menginstall react-native-SVG library
>> 2. merubah file metro.config yang ada di project kita dengan yang ada di doc react-native-svg library
>> 3. restart server react untuk menjalankan svgnya
>> documentasi tentang SVG > https://github.com/react-native-svg/react-native-svg

=========== MEMANGGIL NAVIGATION ============
>> 1. menginstall react-native navigation > https://reactnavigation.org/docs/getting-started
>> 2. restar server react untuk menjalankan navigasi nantinya
>> documentasi tentang navigation > https://reactnavigation.org/docs/getting-started


=========== FOLDER PAGES =============
>> folder ini berisi kumpulan component Halaman yang nantinya akan di panggil pada file App.js
>> file index di folder pages > untuk mengexport semua folder2 yang ada di pages

=========== FOLDER DI DALAM PAGES ==========
>> setiap folder yang di dalam pages masing2 memiliki file index


=========== FOLDER ASSETS ============
>> folder ini berisi folder-folder icon, image , ilustration gambar2 yang di butuhkan 
>> file index di folder assets > file untuk mengexport semua file yang ada di dalam folder icon image atau yang lain 

=========== FOLDER DI DALAM ASSETS =========
>> setiap folder yang di dalam assets masing masing memiliki file index
>> file index > untuk mengimport gambar pada setiap folder yang nntinya akan di export pada file assets/index.js

=========== FOLDER COMPONENT ==========
>> folder ini berisi folder-folder component atom dan component molekul
>> folder atom > folder yang berisi component2 kecil, seperti button dan gap
   - folder atom terdapat file index yang isinya mengexport semua file/folder yang ada di dalam folder atom 
>> folder molekul > folder yang berisi component yang komplex 
   - folder molekul terdapat file indeex yang isinya mengexport semua file / folder yang ada didalam folder molekul
>> file index.js pada folder component > untuk mengexport semua file yang ada di dalam folder atom atau molekul



========= FOLDER UTILS ============
>> folder yang berfungsi sebagai folder global (yang dapat di panggil dimana saja)
>> folder utils terdiri dari >
   - folder colors > folder yang berisi file index variabel colors 
>> file index.js di dalam folder utils untuk mengexport semua file yang ada di dalam folder colors

