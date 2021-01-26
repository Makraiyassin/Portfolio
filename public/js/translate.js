

document.querySelector('#translate').addEventListener("click",function(){
    if(document.querySelector('#translate').textContent=="FR"){
        document.querySelector('#translate').textContent="EN"

        document.querySelector('#title h2').textContent="Développeur Web junior"

        document.querySelector('#language h1').textContent=`Langues`
        document.querySelector('#divlanguage').children[0].innerHTML=
        `
        <li>Français</li>
        <li>Anglais</li>
        <li>Néerlandais</li>
        <li>Arabe</li>
        `
        document.querySelector('#skills h1').textContent=`Compétences`


        document.querySelector('#profile').lastElementChild.textContent=`
        Je suis né le 21/06/1992 à Bruxelles. Je suis marié et j'ai un enfant. Je suis une personne pragmatique et organisée. 
        J'aime travailler en équipe et travailler seul ne me dérange pas non plus. Je suis ponctuel, volontaire, flexible et 
        j'ai le sens des responsabilités. Je suis également motivé et je résiste assez bien au stress.
        `

        document.querySelector('#education h1').textContent='Formations'

        document.querySelector('#education').lastElementChild.innerHTML=`
    
        <li><i class="fa fa-graduation-cap"></i> C.E.S.S acquis à l'A.R.A.T en technique de qualification - Animation</li>
        <li><i class="fa fa-certificate"></i> Certificat de gestion acquis à l'A.R.A.T</li>
        <li><i class="fa fa-address-card-o"></i> Permis de conduire D (Chauffeur de bus) acquis avec "Bruxelles Formation"</li>
        <br>
        <li><i class="fas fa-hourglass-half"></i> formation de développeur Web en cours avec Becode</li>
        `

        document.querySelector('#experience h1').textContent='Experiences'

        document.querySelector('#experience').lastElementChild.innerHTML=`
        
        <li><i class="fas fa-broom"></i> Technicien de surface avec ISS et IRIS (Etudiant)</li>
        <li><i class="far fa-envelope"></i> Facteur chez Bpost (Etudiant)</li>
        <li><i class="fas fa-bus"></i> Chauffeur de bus chez Keolis (2015)</li>
        <li><i class="fas fa-bus"></i> Chauffeur de bus chez GEO (2016-2018)</li>
        <li><i class="fas fa-laptop-code"></i> Développeur web junior chez Becode(2020-2021)</li>
        `
    }else{
        document.querySelector('#translate').textContent="FR"

        document.querySelector('#title h2').textContent="Junior Web developer"

        document.querySelector('#language h1').textContent=`Language`
        document.querySelector('#divlanguage').children[0].innerHTML=
        `
        <li>French</li>
        <li>English</li>
        <li>Dutch</li>
        <li>Arabic</li>
        `

        document.querySelector('#skills h1').textContent=`Skills`

        document.querySelector('#profile').lastElementChild.textContent=`
        I was born on 06/21/1992 in Brussels. I am married and I have a child. I am a pragmatic and organized
        person. I like working in a team and working alone doesn't bother me either. I am punctual, voluntary,
        flexible and I have a sense of responsibility. I am also motivated and I resist stress quite well.
        `

        document.querySelector('#education h1').textContent='Education'

        document.querySelector('#education').lastElementChild.innerHTML=`
    
        <li><i class="fa fa-graduation-cap"></i> C.E.S.S acquired at the A.R.A.T in Qualification technique -
        Animation</li>
        <li><i class="fa fa-certificate"></i> Management certificate acquired at the A.R.A.T</li>
        <li><i class="fa fa-address-card-o"></i> driving license D (bus driver) acquired with "Brussels
            Formation"</li>
        <br>
        <li><i class="fas fa-hourglass-half"></i> Web developer training in progress with Becode</li>
        `

        document.querySelector('#experience h1').textContent='Experience'

        document.querySelector('#experience').lastElementChild.innerHTML=`
        
        <li><i class="fas fa-broom"></i> Surface technician at ISS and IRIS (Student)</li> 
        <li><i class="far fa-envelope"></i> Postman at Bpost (Student)</li> 
        <li><i class="fas fa-bus"></i> Bus driver at Keolis (2015)</li>
        <li><i class="fas fa-bus"></i> Bus driver at GEO (2016 - 2018)</li> 
        <li><i class="fas fa-laptop-code"></i> Junior web developer at Becode(2020-2021)</li> 
`

    }
})    
