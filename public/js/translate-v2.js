document.getElementById('translate').addEventListener('click',(e)=>{
    console.log('hello');
    e.preventDefault()
    if(document.getElementById('translate').textContent == 'FR'){
        document.getElementById("CV").innerHTML= `
                <nav class="navbar  navbar-expand-lg navbar-dark sticky-top">
                <div class="container-fluid">
                    <a href="/" id="translate" class="nav-link">EN</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link" href="#about">A propos de moi</a></li>
                            <li class="nav-item"><a class="nav-link" href="#skills">Compétences</a></li>
                            <li class="nav-item"><a class="nav-link" href="#experience">Experience professionnel</a></li>
                            <li class="nav-item"><a class="nav-link" href="#education">Formation/Etude</a></li>
                            <li class="nav-item">
                                <a id="contact-me" class="nav-link" href="" data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop">Contact</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#portfolio" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Portfolio
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://quiz-marvel-react.web.app/">Quiz Marvel</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://fernelmove.herokuapp.com">Fernelmove (Hackaton)</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://freshop-yassin.herokuapp.com">Webshop</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="http://nextflixx.rf.gd/login.php">Nextflix</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://makraiyassin.github.io/js-game-jam-team-5">Snake</a></li>
                                    <li><a class="dropdown-item" target="_blank" href="https://todo-yassin.herokuapp.com">To
                                            do</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://makraiyassin.github.io/project-hangman/index.html">Hangman</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://makraiyassin.github.io/corona-challenge">Corona</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://makraiyassin.github.io/Bouman-Johnson-housing-project">Immo
                                            forecast</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://makraiyassin.github.io/API-Sprint">API dog</a></li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://comment-yassin.herokuapp.com/">Comment app</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" target="_blank"
                                            href="https://github.com/Makraiyassin?tab=repositories">Github</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a href="/public/CV fr 08-03-21.pdf" target="_blank" id="cvddl" class="nav-link"
                                    download>Télécharger mon CV</a>
                            </li>
        
                        </ul>
                    </div>
                </div>
            </nav>
        
            <section id="about" class="container-fluid">
                <div class="col-8 col-lg-4 profile-picture">
                    <img src="../public/images//photo.jpg" alt="Yassin" class="rounded-circle">
                </div>
                <div class="heading">
                    <h1>Yassin Makraï</h1>
                    <h4>Développeur web junior</h4>
                    <a href="/public/CV fr 08-03-21.pdf" target="_blank" class="button1">Télécharger mon CV</a>
                </div>
            </section>
        
            <section id="skills">
                <div class="container">
                    <div class="bruin-div"></div>
                    <div class="heading">
                        <h2>Compétences</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-xl-6">
                            <span ID="icon" class="fas fa-laptop-code"></span>
                            <div class="skills-block">
                                <ul>
                                    <li id="skillsIcon">
                                        <i><img src="../public/images/html5-logo-png-transparent.png"></i>
                                        <h4>HTML</h4>
                                    </li>
                                    <li id="skillsIcon">
                                        <i><img src="../public/images/css3-logo-png-transparent.png"></i>
                                        <h4>CSS</h4>
                                    </li>
                                    <li id="skillsIcon">
                                        <i><img src="../public/images/javascript-logo-png-transparent.png"></i>
                                        <h4>Javascript</h4>
                                    </li>
                                    <li id="skillsIcon">
                                        <i><img src="../public/images/php-logo-png-transparent.png"></i>
                                        <h4>PHP</h4>
                                    </li>
                                    <li id="skillsIcon">
                                        <i><img src="../public/images/mysql-5-logo-png-transparent.png"></i>
                                        <h4>MySQL</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-12 col-xl-6">
                            <span ID="icon" class="fas fa-laptop-code"></span>
                            <div class="skills-block">
                                <ul>
                                    <li id="skillsIcon">
                                        <i><img src="../public/images/bootstrap-4-logo-png-transparent.png"></i>
                                        <h4>Bootstrap</h4>
                                    </li>
                                    <li id="skillsIcon">
                                        <i><img src="../public/images/sass-1-logo-png-transparent.png"></i>
                                        <h4>Sass</h4>
                                    </li>
                                    <li id="skillsIcon">
                                        <i><img src="../public/images/git-logo-png-transparent.png"></i>
                                        <h4>Git</h4>
                                    </li>
                                    <li id="skillsIcon">
                                        <i><img src="../public/images/nodejs-1-logo-png-transparent.png"></i>
                                        <h4>Node.JS</h4>
                                    </li>
                                    <li id="skillsIcon">
                                        <i><img src="../public/images/logo-pyton.png"></i>
                                        <h4>Python</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
        
                    </div>
                </div>
            </section>
        
            <section id="experience">
                <div class="container">
                    <div class="white-div"></div>
                    <div class="heading">
                        <h2>Experience porfessionnel</h2>
                    </div>
                    <ul class="timeline">
                        <li>
                            <div class="timeline-badge"><span class="fas fa-briefcase"></span></div>
                            <div class="timeline-panel-container">
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h3>Becode</h3>
                                        <h4>Web développeur junior</h4>
                                        <p class="text-muted"><small class="fas fa-clock"></small>2020-2021</p>
                                    </div>
                                    <div class="timeline-body">
                                        <p>Développement de site web et d'application front-end/back-end</p>
                                        <p>Participation au hackaton "Hack your city 2021"</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-badge"><span class="fas fa-briefcase"></span></div>
                            <div class="timeline-panel-container-inverted">
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h3>Geo</h3>
                                        <h4>Chauffeur de bus</h4>
                                        <p class="text-muted"><small class="fas fa-clock"></small>2015-2018</p>
                                    </div>
                                    <div class="timeline-body">
                                        <p>Transport d'enfants/adultes du domicile ou d'un arrêt vers l'école(Ecole Européenne,
                                            BSB...)/lieu de travail(Audi, KBC...)</p>
                                        <p>Voyages scolaire et autres sorties (théatre, piscine, zoo,...)</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        
            <section id="education">
                <div class="container">
                    <div class="bruin-div"></div>
                    <div class="heading">
                        <h2>Formations/Etudes</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="education-block">
                                <h5>2019</h5>
                                <span class="fas fa-graduation-cap"></span>
                                <h3>Cours d'anglais <br> Certificat niveau A2 acquis</h3>
                                <h5>CLL</h5>
                                <div class="bruin-div"></div>
                                <p>Bruxelles (Belgique)</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="education-block">
                                <h5>2018-2019</h5>
                                <span class="fas fa-school"></span>
                                <h3>Apprentissage des bases du developpement web</h3>
                                <h5>Autodidacte</h5>
                                <div class="bruin-div"></div>
                                <p>Bruxelles (Belgique)</p>
                            </div>
                        </div>
        
                    </div>
        
                    <div class="row">
                        <div class="col-md-6">
                            <div class="education-block">
                                <h5>2014</h5>
                                <span class="fas fa-graduation-cap"></span>
                                <h3>Formation de Chauffeur de bus/car <br> Permis D acquis</h3>
                                <h5>Bruxelles Formation</h5>
                                <div class="bruin-div"></div>
                                <p>Bruxelles (Belgique)</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="education-block">
                                <h5>2013</h5>
                                <span class="fas fa-school"></span>
                                <h3>Premiere année de bachelier - Enseignant en science économique </h3>
                                <h5>ISPG</h5>
                                <div class="bruin-div"></div>
                                <p>Bruxelles (Belgique)</p>
                            </div>
                        </div>
        
                    </div>
        
                    <div class="row">
                        <div class="col-md-6">
                            <div class="education-block">
                                <h5>2012</h5>
                                <span class="fas fa-graduation-cap"></span>
                                <h3>CESS acquis</h3>
                                <h5>ARAT</h5>
                                <div class="bruin-div"></div>
                                <p>Bruxelles (Belgique)</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="education-block">
                                <h5>2012</h5>
                                <span class="fas fa-graduation-cap"></span>
                                <h3>Certificat de gestion acquis</h3>
                                <h5>ARAT</h5>
                                <div class="bruin-div"></div>
                                <p>Bruxelles (Belgique)</p>
                            </div>
                        </div>
        
                    </div>
        
                </div>
            </section>
        
            <section id="portfolio">
                <div class="container">
                    <div class="white-div"></div>
                    <div class="heading">
                        <h2>Portfolio</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <a href="https://fernelmove.herokuapp.com/" target="_blank">
                                <img class="img-thumbnail" src="../public/images/Fernelmove-capture.png" alt="fernelmove">
                                <h4 class="portfolioText">Site web pour mobile réalisé en équipe pendant 42 heures au cours d'un hackaton</h4>
                            </a>
                        </div>
                        <br>
                        <div class="col-md-6">
                            <a href="https://freshop-yassin.herokuapp.com/" target="_blank">
                                <img class="img-thumbnail" src="../public/images/fresh.png" alt="eshop">
                                <h4 class="portfolioText">E-shop réalisé en solo au cours de ma formation chez Becode</h4>
                            </a>
                        </div>
                        <div class="col-md-6">
                            <a href="http://nextflixx.rf.gd/" target="_blank">
                                <img class="img-thumbnail" src="../public/images/nextflix.png" alt="fernelmove">
                                <h4 class="portfolioText">Site web inspiré de Netflix réalisé en équipe au cours de ma formation chez Becode</h4>
                            </a>
                        </div>
                        <div class="col-md-6">
                            <a href="https://makraiyassin.github.io/js-game-jam-team-5" target="_blank">
                                <img class="img-thumbnail" src="../public/images/snake.png" alt="eshop">
                                <h4 class="portfolioText">Jeu Snake réaliser en équipe au cours de ma formation chez Becode</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Envoyer un message</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form method="POST" action="/msg">
                            <div class="modal-body">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="name" name="name">
                                    <label for="name">Nom</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="email" name="email" required>
                                    <label for="email">Adresse email</label>
                                </div>
                                <div class="form-floating">
                                    <textarea class="form-control" name="message" id="message" style="height: 100px"
                                        required></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                    style="background-color: #b69d6f">Fermer</button>
                                <input type="submit" class="btn btn-primary" value="Envoyer" style="background-color: #725217">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        ` 
    }
})