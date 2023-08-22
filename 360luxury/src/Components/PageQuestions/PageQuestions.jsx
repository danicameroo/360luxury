import { useLocation } from 'react-router-dom';
import {questions} from '../../data'
import IconsStatics from '../iconsStatics/iconsStatics'
import './PageQuestions.css'
import { useEffect } from 'react';

const PageQuestions = () => {
    const location = useLocation();
    const scrollOnLoadQuestion = new URLSearchParams(location.search).get('Question') === 'true';

    useEffect(() => {
        if (scrollOnLoadQuestion) {
        const scrollToQuestionSection = () => {
            const element = document.getElementById('question');
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        };
        scrollToQuestionSection();
        }
    }, [scrollOnLoadQuestion]);
    return(
        <div className='positionQuestion' id='question'>
            <IconsStatics />
            <div>
                <h1 className='questionsTitle'>frequent questions</h1>
            </div>
            <div>
                {questions.map((item) =>(
                    <div className='containerQuestions'>
                        <div className='textContainerQuestions'>
                            <h1 className='titleQuestions'>{item.title}</h1>
                            <p className='textQuestions'>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PageQuestions