# HTTP / AJAX II React Modül Projesi: CRUD Film

Bugün HTTP metotlarını, REST arayüzlerini, CRUD applicationları ve put, delete, edit işlevlerini öğrendiniz. Ayrıca, Route bağlantılı bileşenlere propların nasıl iletileceğini ve bir api'den değer almak için URL parametrelerinin nasıl kullanılacağını araştırdınız. Bu projede, bir film veritabanı CRUD uygulamasına çeşitli işlevsellik parçalarını uygulayarak bu yeteneklerin her birini gerçekleştireceksiniz.


## Giriş
CRUD uygulamaları çoğu web uygulamasının temelidir. Harici bir kaynaktan veri oluşturmayı, düzenlemeyi ve silmeyi yönetebilmek, olabildiğince önemli bir beceridir. Bu projede, tüm bu temel eylemlere izin vermek için gerekli kodu tamamlayacaksınız.

![Film Örneği](proje-hedefi.gif)

### Kaynak: API dökümanı 

#### GET `http://localhost:9000/api/movies`
- Aşağıdaki formatta tüm Filmleri getirir:
```
[{
  id: 5,
  title: 'Tombstone',
  director: 'George P. Cosmatos',
  metascore: 89,
  genre: "Drama",
  description: : "A successful lawman's plans to retire anonymously in Tombstone, Arizona are disrupted by the kind of outlaws he was famous for eliminating."
}]
```
#### GET `http://localhost:9000/api/movies`
- Sunucudaki tüm filmleri getirir.

#### GET `http://localhost:9000/api/movies/:id`
- Girilen id li filmi getirir.

#### POST `http://localhost:9000/api/movies`
- Body de aktarılan bilgilerle yeni bir film ekler. Güncellenmiş movie listesini döndürür.

#### PUT `http://localhost:9000/api/movies/:id`
- Girilen id li filmin body deki bilgilerini günceller. Güncellenmiş film listesini döndürür.

#### DELETE `http://localhost:9000/api/movies/:id`
- Girilen id deki filmi listeden siler. Silinen filmin id sini döndürür.


***Görevlerinizi tek tek tamamladığınızdan ve ilerlemeden önce her bir görevi test ettiğinizden emin olun..***

## Talimatlar
### Görev 1: Proje Kurulumu
* [x] Fork.
* [x] Klon
* [x] Proje dizinine girin
* [x] `npm install`
* [x] `npm start`

### Görev 2: Proje Gereksinimleri
#### Film düzenleme
> *Kaynak güncellemesi için yönlendirme, bileşen ve api çağrılarını ekleme sürecini gözden geçirerek başlayalım.*

* [x] Öncelikle, filmi düzenle bileşenine gidebilmemiz gerekiyor. App.js içinde,  `<EditMovieForm> ` bileşenine edit route unu ekleyin.

* [x] Ardından, url aracılığıyla bileşene iletilen idyi almamız gerekiyor.. id yi almak için `useParams` hookunu kullanın.

* [x] Mevcut filmin niteliklerini yerel form stateimize yükleyebilmeliyiz. `EditMovieForm` bağlandığında, mevcut idmizin filmini api'den alın ve yerel state'e döndürülen verileri kaydedin.

* [x] Bu noktada, düzenleme formu gönderildiğinde hiçbir şey olmuyor. Sunucuyu güncellenmiş film verilerimizle güncellemek için gereken api çağrısını ekleyin.

* [x] Sunucu verilerinizin ve yerel state'inizin senkronize olduğundan emin olmayı unutmayın! Düzenleme formuna, uygulamanın "setMovies" metoduna erişim izni vermek için düzenleme yapmak için gereken değişiklikleri yapın.

* [x] Artık `setMovies`e erişimimiz olduğuna göre, güncellenmiş film listesinin global state'imize kaydedildiğinden emin olun.

* [x] Kullanıcıyı halihazırda düzenlenen filmin bağımsız bilgi sayfasına yönlendirin.

#### Film silme
> *Bir CRUD özelliği eklediniz! Aferin! Şimdi kareleri silelim...*

* [x] Silmek için gereken "butonu" tutan bileşeni tanımlayın. Bu butona bir event handler ekleyin.

* [x] Görüntülenmekte olan filmi silmek için istekte bulunan bir event handler oluşturun. Bu requestten ne döndürüldüğünü gözlemleyin.

* [x] Bir kez daha sunucuyu ve state verilerini senkronize tutmanız gerekecek. `App.js` içinde, `deleteMovie` metodunu bir id alıp, girilen id li filmi verimizden silip state'i güncelleyecek şekilde tamamlayın.

* [x] `deleteMovie` 'yi ilgili bileşene aktarın.

* [x] Film silme isteği yapıldığında `deleteMovie` yi çalıştırın, istek tamamlandığında kullanıcıyı `/movies` routeuna yönlendirin.

#### Yeni bir film ekleme
> *Tamam! Artık hazırsın! Şimdi baştan sona bir CRUD oluşturalım.*

* [x] Sıfırdan bir "AddMovieForm" bileşeni oluşturmak için "EditMovieForm.js"yi model olarak kullanın. Bileşen, yeni bir filmin tüm özelliklerini yerel state'de tutmalıdır. ADDMOVIE COMP OLUSTURULMADI.

* [x] AddMovieForm'a erişim sağlayan bir route ekleyin.

* [x] Kullanıcı arayüzünün yeni "AddMovieForm"unuza yönlendirilmesi gereken bölümünü bulun. Bu düğmenin beklendiği gibi çalışmasını sağlayın.

* [x] AddMovieForm'da, form gönderimi için bir event handler ekleyin. Form gönderildiğinde, bileşenin state değerleri ile bir film eklemek için uygun çağırıyı çalıştırın.

* [x] Bileşeninizin, oluşturulduktan sonra genel state'inin `/movies` dizinine yönlendirmeler için gerekli erişime sahip olduğundan ve bunları çalıştırdığından ve değiştirdiğinden emin olun.

### Esnek görevler
- Eklenen DeleteMovieModal öğesinin bir silme işlemi gerçekleşmeden önce görünmesini ve çalıştırılmasını sağlayın.
- "addToFavorites" işlevini ekleyin. `Film` bileşeninde favori butonuna basıldığında, o anda görüntülenenin idsinin ve adının `App.js`deki favori state diliminde olduğundan emin olun.
- Ekstra kredi için, yalnızca benzersiz filmlerin favori olarak eklenebildiğinden emin olun. Diziler için ".find" metodunu nasıl kullandığımızı hatırlayın.
- Stiller ekleyin.
