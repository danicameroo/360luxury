import {questions} from '../../data'
import IconsStatics from '../iconsStatics/iconsStatics'
import './PageQuestions.css'

const PageQuestions = () => {
    return(
        <div>
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