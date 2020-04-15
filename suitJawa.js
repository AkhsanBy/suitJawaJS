var ulang = true;
while(ulang) {

	// menangkap pilihan player
	var player = prompt('pilih: gajah, semut, orang');

	// menangkap pilihan komputer	
	// membangkitkan bilangan random
	var komputer = Math.random();

	if (komputer < 0.34) {
		komputer = 'gajah';
	} else if (komputer >= 0.34 && komputer < 0.67) {
		komputer = 'orang';
	} else {
		komputer = 'semut';
	}

	// menentukan aturan
	if (player == komputer) {
		hasil = 'SERI!';
	} else if (player == 'gajah') {
		if (komputer == 'orang') {
			hasil = 'MENANG!';
		} else {
			hasil = 'KALAH!';
		}
	} else if (player == 'orang') {
		if (komputer == 'gajah') {
			hasil = 'KALAH!';
		} else {
			hasil = 'MENANG!';
		}
	} else if (player == 'semut') {
		if (komputer == 'orang') {
			hasil = 'KALAH!';
		} else {
			hasil = 'MENANG!';
		}
	} else {
		hasil = 'Anda memasukkan pilihan yang salah!';
	}


	// tampilkan hasilnya
	alert('Kamu memilih = ' +player+ ' dan komputer memilih = ' +komputer+ ' \nMaka hasilnya : KAMU ' +hasil);

	ulang = confirm('Main lagi?');
}	





