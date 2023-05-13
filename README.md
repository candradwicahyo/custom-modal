# Custom Modal

program dengan nama "Custom Modal" yang dibuat menggunakan html, css dan javascript. program ini berguna untuk menampilkan modal yang sesuai dengan cara menekan tombol yang memiliki attribute "data-modal" yang sama dengan "data-type" yang dimiliki oleh tiap modal yang dibuat.

setiap kali ingin memanggil sebuah modal, pastikan tombol tersebut memiliki attribute "data-modal" seperti ini

```html 
<button type="button" data-modal="namaModal">click</button>
```

dan modal yang ingin dipanggil juga harus memiliki attribute "data-type" yang sama dengan tombol yang ditekan.

```html 
<div class="modal" data-type="namaModal">
  <div class="modal-header">
    <h3 class="modal-title">Default Modal</h3>
    <span class="btn-close-modal">×</span>
  </div>
  <div class="modal-body">
    <div class="frame">
      <h4>Hi, my name is candra dwi cahyo</h4>
    </div>
  </div>
</div>
```

karena jika attribute "data-modal" dari tombol yang ditekan dengan attribute "data-type" milik modal tidak sama, maka modal yang dipanggil tidak akan tampil ke halaman.

## Tools dan Bahasa yang Digunakan

* html
* css
* javascript

## kontributor

* candra dwi cahyo

  * [facebook](https://facebook.com/candradwicahyo18)
  * [instagram](https://instagram.com/candradwicahyo18)

## Cara Mengunduh

Untuk mengunduh, buka command prompt pada perangkat Anda, lalu install Git dan ketikkan kode berikut:

```bash 
git clone https://github.com/candradwicahyo/custom-modal.git
```

## Preview dan Demo

Berikut adalah tampilan preview dari repository:

![preview](https://github.com/candradwicahyo/custom-modal/blob/master/preview1.jpg)

![preview](https://github.com/candradwicahyo/custom-modal/blob/master/preview2.jpg)

Untuk mencoba demo, silakan kunjungi [tautan ini](https://candradwicahyo.github.io/custom-modal)
