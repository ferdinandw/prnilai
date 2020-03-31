console.log('Start Program Nilai');

const nilaiInput = window.prompt ('Masukkan Nilai Anda');
const nilai = Number (nilaiInput);

if (nilai <= 100 && nilai >=90) {
    window.alert('Nilai Anda Sangat Baik');
}
else if (nilai <90 && nilai >=75) {
    window.alert('Nilai Anda Baik');
}
else if (nilai >60 && nilai <75) {
    window.alert('Nilai Anda Cukup');
}
else {
    window.alert('Nilai Anda Kurang');
}

console.log('Stop Program Nilai');