import React from "react";
import Accordion from "./../../components/accordeon/Accordeon";
import './FrequentlyAskedQuestions.css';

function FrequentlyAskedQuestions() {
    return (
        <div className="faq-page-container">
            <h1>Veel gestelde vragen</h1>
            <div>
                <Accordion
                    title="Hoe log ik in?"
                    content="Om in te loggen dien je je eerst te registreren op de registratie pagina. Vervolgens wordt je automatisch doorverwezen naar de inlogpagina."
                />
                <Accordion
                    title="Hoe werkt de recepten zoeker?"
                    content="De zoektermen voor de recepten zoeker kunnen helaas alleen in de Engelse taal ingevoerd worden en kunnen bestaan uit de naam of ingredient."
                />
                <Accordion
                    title="Hoe werkt de maaltijden planner?"
                    content="
   <p>Stap 1: Bereken met de calorie calculator specifieck uw aanbevolen dagelijkse hoeveelheid (ADH) calorieën. Voer deze berekening zijn een paar persoonlijke gegevens nodig.</p>
   </br>
   <p>Stap 2: Vervolgens kun je op basis van je hoeveelheid gewenste calorieën je dagelijkse maaltijdplan ophalen. Ontvang leuke recepten voor drie maaltijden per dag: ontbijt, lunch en avond maaltijd.</p>"
                />
                <Accordion
                    title="Kan ik mijn favorieten recepten of maaltijden opslaan?"
                    content="
   <p>Nee, dat is helaas nog niet mogelijk. Wel kun je je hoeveelheid calorieën bijhouden in de calorieën tracker.</p>"
                />
                <Accordion
                    title="Kan ik mijn favoriete recepten delen met vrienden of via social media?"
                    content="
   <p>Nee, dat is helaas nog niet mogelijk.</p>"
                />
            </div>
        </div>

    );
}

export default FrequentlyAskedQuestions;