/*
variabel color > sebagai variabel global color yang nantinya akan bisa di panggil dan ketika desaigner ingin merubah color disetiap component, cukup ganti nilainya di variabel color ini

variabel color > pada objectnya mengambil warna2 dari variabel basic yaitu mainColors

variabel mainColors > variabel basic yang terdapat object yang bernilai warna2

> variabel colors > terdapat beberapa object warna untuk component, seperti
    - primary
    -secondary
    - Text > default dan secondary
    - Button > primary dan secondary masing2 memiliki 2 object di dalamnya backgroundColor dan text
    -
*/

const mainColors = {
    green1: '#0BCAD4',
    dark1 : '#112340',
    grey1 : '#7D8797',
    grey2 : '#e9e9e9'
}

export const colors = {
    primary: mainColors.green1,
    secondary : mainColors.dark1,
    white: 'white',
    black: 'black',
    text: {
        default: mainColors.dark1,
        secondary: mainColors.grey1
    },
    button : {
        primary: {
            backgroundColor: mainColors.green1,
            text : 'white'
        },
        secondary: {
            backgroundColor: 'white',
            text: mainColors.dark1
        }
    },
    border : mainColors.grey2
}