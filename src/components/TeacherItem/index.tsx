import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://lh3.googleusercontent.com/-fDh_BloFZEo/XtrH_8eHV8I/AAAAAAAAbEk/H8Z5u2xmMBY3AYdy_tfx0BTQRgQu9INMACEwYBhgLKtMDAL1OcqytMDleqACadZWqHjCkCxk68AHl3D8HxGieVUcwo6Mb0eu4viGvBMSiwfK-gZ7e837VfJFvUwWjXO62ZjcYoXMz0nClpoIj4Kew2mkExaN8JcKF-qrX6g-R_zUNEy82Sq6V816QkKPzH5ReywuWnEjaPyNZUIG6U6Ue6qucwNu5aei9yyQP1IUBbg91Mk9V1sXYoGrA7b9q9f4nOuh2YnyjAbHqk5Z0rpkOz9OiXP9WEqovknL7Fvthap1VKHF3d3laLBjRUTOwBNR27_97ji8HGfLZiDpUPcNfgKXoZrqjCpNvFiVcARN6Q6NzbQIkBWHn9Qc9AIhPGoLr9ZSFLD6BUEVxstTK_YCd5W83U2PDyuD1Hi5P8Kr51Oy3Bd_k7pgZvsDiRqKlKBb_J9KuVJwuAatu0fmL8xWBdRK1oAANCXCgkqFhrv9J7p0gM31TG3uWT_DtKYLkqJ2xjXgW_9mXY3B0Dq9skuuwFawtQuYcDb13Zcq-djl-Fihhb05rE1W5M5t8aadvYDhNOGxjr-PX7GAGPm8YBf-DOzyzXbU7VROrLjQynWmTGi0JONBl4CVtFx3areWV5X2uQ2tukaP_6nrzM7TcBZEB5AUS5u0wurWo-QU/w138-h140-p/EB1CD46C-0A41-4785-AA04-F177BDF58E48.jpeg"/>
                <div>
                    <strong>Raphael Morette</strong>
                    <span>Como ser bonitão/Gatão</span>

                </div> 
            </header>
            <p>
                Entusiasta em chamar atenção.
                <br/>
                <br/>
                Muitas experiências em ser um bobão e ser o mais gato do rolê, 
                mesmo que sua namorada odeie chamar atenção não tem como com o Raphael ao lado
                
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>1 cerveja e dois beijos</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
};

export default TeacherItem;