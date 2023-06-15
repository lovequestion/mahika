import {Container, Row} from 'react-bootstrap';
import GridItems from './GridItems';
import love1 from "./../images/card1.jpg";
import love2 from "./../images/card2.png";
import love3 from "./../images/card3.png";
const Content = () => {
    return ( 
        <div className="bg-dark text-warning">
            <br></br>
            <Container fluid>
                <h1>The Story of Us!</h1>
            <br></br>
            <Row className='g-2 justify-content-center'>
                <GridItems image={love1} title="Moon" caption="In the man's dream, he envisioned a love that would endure for a lifetime, 
                a connection he believed to be blessed by God. However, after experiencing a failed love in the past, he began to doubt
                 whether such a love could ever be found again.But then, unexpectedly, someone entered his life. This person, who came into his world 
                 without warning,had the power to restore his faith in love and make him believe that another lasting and meaningful connection was possible.
                 The encounter with this unexpected individual brought the man a renewed sense of hope and purpose. Love can emerge in the most unforeseen circumstances.Filled with newfound optimism, the man decided to embrace this opportunity and nurture the budding love with care, commitment, and dedication. Despite moments of doubt and disappointment, 
                 life has a way of surprising us with unexpected encounters and second chances. It emphasizes the idea that love can appear when we least expect it,
                reigniting our belief in lasting connections and offering the potential for a love that can grow and flourish over time."/>

                <GridItems image={love2} title="God's Will"  caption=" In the realm of human existence,
                  there are moments when unexpected love transcends the ordinary, 
                  a divine gift bestowed upon two souls by the benevolent hand of God. 
                  Such a love story unfolds like a serendipitous melody, 
                  woven with delicate threads of destiny and guided by unseen forces. 
                  It is a tapestry of connections, intricately crafted with purpose and grace. In the depths of life's unpredictable journey, 
                  these two hearts cross paths, their meeting defying the boundaries of time and space. 
                  This encounter is not of this world alone. With every shared glance, a universe of emotions awakens, and an unbreakable bond forms.
                  In this unexpected love,they discover the infinite depths of compassion, kindness, and devotion. 
                  It is a love that radiates with a luminous glow, illuminating the darkest corners of their lives. 
                  This divine love transcends human comprehension, a testament to the miracles that unfold when the hands of God guide two hearts to unite.
                  The beauty of love is that you can fall into it with the most unexpected person at the most unexpected time."/>

                <GridItems image={love3} title="Sunset"  caption="In the quiet corners of her heart, a young girl yearned for a love ordained by the gods themselves. 
                  With each passing day, she wandered through life's labyrinth, her spirit aflame with hope and anticipation. 
                  She believed that somewhere, amidst the vast tapestry of destiny, a kindred soul awaited her arrival. Guided by an unwavering faith, she remained patient, 
                  trusting that the divine forces would weave their intricate design and bring her beloved into her embrace. With every star that adorned the night sky,she whispered her desires, casting her hopes upon the celestial canvas. For in her heart, she knew that a love conceived by the gods would transcend the limitations of mortal existence, 
                  entwining their lives with an ethereal beauty that would withstand the tests of time. And so, she carried her dreams like precious jewels, treasuring the promise that one day,
                  her fervent prayers would be answered, and her soul would dance in the embrace of a love born from the divine.
                  Being deeply loved by someone gives you strength, while loving someone deeply gives you courage." />
            </Row>
        </Container>

        </div>
     )
}
 
export default Content;