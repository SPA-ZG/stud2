URL: https://best-quotes.onrender.com
Pokretanje: npm run serve
+ interpolation/one-way binding -> DA, src/components/Button v-bind:style u <button> i {{label}} 
+ two-way binding -> DA, src/components/AddQuote v-model="quoteContent" u <input>
+ methods -> DA, npr u src/components/Button metoda onClick ili src/views/Home itd.
+ computed properties -> DA, src/views/Home
+ barem jedan scoped style -> DA, src/components/Header.vue i neki drugi
+ koristiti barem jedan lifecycle hook -> DA, src/App.vue mounted, srv/views/Home.vue created
+ routing (više stranica) -> DA, /, /login, /signup
	+ aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2)
	- dinamičko usmjeravanje s 404 stranicom ("catch all")
+ (barem) dvije komponente -> DA, src/components/Button, src/components/Quote
	+ komponenta bez stanja, koristiti properties -> DA, src/components/Button
	+ komponenta sa stanjem -> DA, src/components/AddQuote
+ barem jedna komponenta mora emitirati barem jedan event -> DA, src/components/Button emitira event u metodi onClick
+ store (Pinia) -> DA, src/stores/useAuthStore.js (pohranjuje podatke o trenutno prijavljenom korisniku, postavljaju se prilikom logina/registracije)
+ asinkroni dohvat podataka s backenda, možete: -> DA (Firebase)
	+ koristiti Firebase ili Back4App, Mocky, itd. -> korišten je Firebase (setup: src/firebase/init.js ; primjer src/components/AddQuote metoda onSubmit pohranjuje zapis)
	- vlastiti storage, ili
	- možete mock napraviti, držati podatke u memoriji, ali mora biti asinkroni poziv/upis
	- ostvariti asinkrono (lazy, po potrebi) učitavanje nekog dijela aplikacije (stranice ili komponente)