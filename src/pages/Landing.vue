<template>
   <div>
      <div class="myrow" id="splash-screen">
         <nav id="navbar">
            <div id="logo"> <img /> Budgety </div>
            <div>
               <router-link to="login" class="button-on-black">
                  Accedi
               </router-link>
            </div>
         </nav>

         <div id="splash-card">
            <div class="title">
               <h2>Le tue finanze, in modo chiaro</h2>
            </div>
            <div class="text">
               Visualizza i tuoi soldi a 360 gradi. Guarda tutti i tuoi account
               in un solo posto. Utilizza una tecnologia di cui puoi fidarti.
            </div>
            <router-link to="login" class="button-on-black">
               Inizia adesso
            </router-link>
         </div>
      </div>

      <div class="myrow" id="three-cards">
         <div class="landing-card">
            <div class="title">Budget</div>
            <hr />
            <div class="body">
               Un buon sistema di budget è alla base di qualsiasi piano
               finanziario per il futuro. Budgety ti permette facilmente di
               impostare dei limiti alle tue categorie di spesa, e di
               controllare quanto del tuo budget è ancora disponibile.
            </div>
         </div>

         <div class="landing-card">
            <div class="title">Money Management</div>
            <hr />
            <div class="body">
               Mantieni una traccia delle tue spese e metti da parte per il
               futuro. Il nostro tool per la gestione del denaro può aiutarti a
               raggiungere i tuoi obiettivi giorno per giorno.
            </div>
         </div>

         <div class="landing-card">
            <div class="title">Responsabilità</div>
            <hr />
            <div class="body">
               La nostra schermata di report mostra in modo intuitivo le
               fluttuazioni del tuo patrimonio totale e del tuo flusso di cassa
               così potrai accorgerti subito di periodi con spese eccessive.
               Potrai poi decidere se le tue abitudini finanziarie sono da
               rivedere, nell'ottica di una gestione più responsabile del tuo
               denaro.
            </div>
         </div>
      </div>

      <div class="myrow" id="slider">
         <div class="row-title">
            <h2
               >Le tue finanze non sono mai <br />
               state così chiare</h2
            >
         </div>
         <div class="slider-option">
            <img
               src="https://www.personalcapital.com/static/images/rebrand/pages/financial-tools/carousel/ft-carousel-investment-checkup.png"
            />
            <h3 class="title">Dashboard comprensiva</h3>
            <div class="text">
               Osserva in modo semplice e chiaro dove stai distribuendo il tuo
               denaro. Puoi anche fare meglio e visualizzare le tue entrate e le
               uscite mese per mese cosi da poter pianificare i tuoi
               investimenti per il futuro
            </div>
         </div>
      </div>

      <div class="myrow" id="side-side">
         <div class="description">
            <div class="title">
               <h2> Traccia & Gestisci<br />Il tuo Denaro </h2>
            </div>
            <hr />
            <div class="text">
               Il nostro pannello multi-account ti permette di visualizzare le
               spese e le entrate che hai su ogni conto che decidi di tracciare.
               Hai a portata d'occhio le tue ultime transazioni, quanto denaro
               hai su ogni conto, e quanto denaro hai in totale.
            </div>

            <div class="button-on-black">Inizia adesso</div>
         </div>
         <div class="image">
            <img src="http://www.luvia.it/images/luvia/kuumo-radius.png" />
         </div>
      </div>

      <div class="myrow" id="myfooter">
         © 2020 Budgety Corporation. All rights reserved.
      </div>
   </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
@import '@/assets/global.sass'

.myrow
   width: 100vw


#splash-screen
   height: 100vh
   background-color: black
   background-image: url('https://upload.wikimedia.org/wikipedia/commons/9/91/Henrik_Norlen_3.jpg')//url('https://www.personalcapital.com/static/images/rebrand/heros/1440/Hero-Mike.png')
   background-repeat: no-repeat
   background-position: bottom center
   background-size: contain

#navbar
   display: flex
   justify-content: space-between
   padding: 30px 70px
   font-size: 18px

#logo
   color: white

#three-cards
   display: flex
   justify-content: space-around
   background: #f3f3f4
   padding: 70px 50px

   .landing-card
      background: white
      -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1)
      -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1)
      box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1)
      width: 28%
      height: 300px
      padding: 24px 32px

      .title
         font-size: 20px
         color: black
         font-weight: bold

      hr
         border-top: 3px solid black

.row-title
   text-align: center
   margin: auto
   margin-bottom: 50px
   h2
      color: black
      font-weight: bold

#slider
   padding: 70px 50px

   .slider-option
      .title
         margin-bottom: 30px

      .text
         max-width: 800px
         margin: auto

.button-on-black
   color: map-get($colors, "secondary")
   padding: 14px 24px
   border: 2px solid map-get($colors, "secondary")
   -webkit-border-radius: 8px
   -moz-border-radius: 8px
   border-radius: 8px
   display: inline-block

#side-side
   padding: 70px 0
   background: #f3f3f4
   display: flex
   justify-content: space-evenly


   .description
      width: 40%
      padding: 0 100px
      text-align: left
      align-self: center

      hr
         border-top: 3px solid black
         margin-bottom: 32px

      .title
         margin-bottom: 30px
         h2
            color: black
            font-weight: bold

      .text
         margin-bottom: 30px


   .image
      width: 60%
      overflow: hidden

      img
         max-height: 700px

#myfooter
   padding: 30px 20px
   background: #000
   color: white

#splash-card
   width: 450px
   text-align: left
   position: absolute
   top: 35%
   left: 10%

   .title
      margin-bottom: 30px
      h2
         color: map-get($colors, 'secondary')
         font-weight: bold

   .text
      margin-bottom: 30px
      color: white
</style>
