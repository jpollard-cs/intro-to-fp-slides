// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  fpWater: require("../assets/fpWater.jpg"),
  lolcat1: require("../assets/lolcat1.jpg"),
  lolcatY: require("../assets/lolcatY.gif"),
  lolcat3: require("../assets/lolcat3.jpg"),
  cookieMonster: require("../assets/cookiemonster.jpg"),
  poop: require("../assets/poop.png"),
  curry: require("../assets/curry.png"),
  legos: require("../assets/legos.jpg"),
  fourierCat: require('../assets/fourierCat.jpg')
};

preloader(images);

const theme = createTheme({
  primary: "#fb6542"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps>
              An introduction to
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Functional
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Programming
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" >
            <Image src={images.lolcat1.replace("/", "")} margin="0px auto 40px" height="400px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              ...With funny cats
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Why FP?!!
            </Heading>
            <Image src={images.lolcatY.replace("/", "")} margin="0px auto 40px" height="300px"/>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}
                 notes="We'll go into further details in the slides to follow, but first let's take">
            <Appear fid="1">
              <Heading size={1} caps fit textColor="#F70025">
                First Class Functions
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="#F7EFE2">
                Purity
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="#F25C00">
                Composability
              </Heading>
            </Appear>
            <Appear fid="4">
              <Heading size={1} caps fit textColor="#F9A603">
                Currying (yum!)
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading fit textColor="#375E97">
              compose(map(f), map(g)) === map(compose(f, g))
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/fp.1.example")}
              margin="20px auto" />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading caps fit textColor="#375E97">First Class Functions</Heading>
            <BlockQuote>
              <Quote textSize="60px">a first-class citizen  in a given programming language
                is an entity which supports all the operations generally available to other entities</Quote>
              <Cite>Wikipedia</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading caps fit textColor="#375E97">First Class Functions</Heading>
            <Heading size={2} caps fit textColor="#375E97">
              ...These operations typically include being
            </Heading>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="#F5BE41">
                passed as an argument
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="#31A9B8">
                returned from a function
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="#CF3721">
                assigned to a variable
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading caps fit textColor="#375E97">First Class Functions</Heading>
            <Heading size={2} caps fit textColor="#F70025">
              Generic is better
            </Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Brand Name
                </Heading>
                <CodePane
                    lang="jsx"
                    source={require("raw!../assets/fp.firstClassFn1_a.example")}
                    margin="20px auto" />
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Generic
                </Heading>
                <CodePane
                    lang="jsx"
                    source={require("raw!../assets/fp.firstClassFn1_b.example")}
                    margin="20px auto" />
              </Fill>
            </Layout>
            <Heading size={1} fit textColor="#F9A603">
              spare me <i>this</i>
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading caps fit textColor="#31A9B8">Pure Functions</Heading>
            <BlockQuote>
              <Quote textSize="60px">A pure function is a function that, given the same input, will always return the same
                output and does not have any observable side effect.</Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="black">
            <Heading caps fit textColor="#31A9B8">Pure Functions</Heading>
            <Heading size={2} caps fit textColor="#F70025">
              Impure functions destroy their input and turn it into
            </Heading>
            <Image src={images.poop.replace("/", "")} height="100px"/>
            <CodePane
                lang="jsx"
                source={require("raw!../assets/fp.pure.1.example")}
                margin="20px auto" />
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="black">
            <Heading caps fit textColor="#31A9B8">Pure Functions</Heading>
            <Heading size={2} caps fit textColor="#F70025">
              An example of an impure function in popular culture
            </Heading>
            <Image src={images.cookieMonster.replace("/", "")} margin="20px" height="250px"/>
            <Appear fid="1">
              <Heading size={2} caps fit textColor="#F70025">
                Monsters!
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="black">
          <Heading caps fit textColor="#31A9B8">Pure Functions</Heading>
          <Appear fid="1">
            <Heading size={2} caps fit textColor="#F70025">
              are stateless
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps fit textColor="#F7EFE2">
              have no side-effects
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps fit textColor="#F25C00">
              By avoiding state and side-effects we get...
            </Heading>
          </Appear>
          <Appear fid="4">
            <Heading size={2} caps fit textColor="#F9A603">
              referential transparency!!
            </Heading>
          </Appear>
        </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading caps fit textColor="#31A9B8">Pure Functions</Heading>
            <Image src={images.lolcat3.replace("/", "")} margin="20px" height="400px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading caps fit textColor="#31A9B8">Pure Functions</Heading>
            <BlockQuote>
              <Quote fit textSize="32px">REFERENTIAL TRANSPARENCY means that when we supply a function with a given set of arguments it will <i>always</i> return the same result.</Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading caps fit textColor="#31A9B8">Pure Functions are</Heading>
            <Appear fid="1">
              <Heading size={2} caps fit textColor="#F70025" textSize="100px">
                cacheable (memoization)
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="#F7EFE2" textSize="100px">
                testable & portable
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit textColor="#F25C00" textSize="100px">
                Self-Documenting
              </Heading>
            </Appear>
            <Appear fid="4">
              <Heading size={2} caps fit textColor="#F9A603" textSize="100px">
                Easily Parallelizable (avoids shared state)
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "slide"]} bgImage={images.curry.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="#F9A603">Currying</Heading>
            <CodePane
                lang="jsx"
                source={require("raw!../assets/fp.curry.1.example")}
                margin="20px auto" />
            <Heading size={2} caps fit textColor="#31A9B8" textSize="100px">
              <i>partial application</i>
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgImage={images.curry.replace("/", "")} bgDarken={0.75}>
            <Heading size={2} caps fit textColor="#F25C00">
              Test time!
            </Heading>
            <CodePane
                lang="jsx"
                source={require("raw!../assets/fp.curryTest.1q.example")}
                margin="20px auto" />
            <Appear fid="1">
              <CodePane
                  lang="jsx"
                  source={require("raw!../assets/fp.curryTest.1a.example")}
                  margin="20px auto" />
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgImage={images.curry.replace("/", "")} bgDarken={0.75}>
            <Heading size={2} caps fit textColor="#F25C00">
              Test part deux
            </Heading>
            <CodePane
                lang="jsx"
                source={require("raw!../assets/fp.curryTest.2q.example")}
                margin="20px auto" />
            <Appear fid="1">
              <CodePane
                  lang="jsx"
                  source={require("raw!../assets/fp.curryTest.2a.example")}
                  margin="20px auto" />
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="#FA6E59">
            <Heading size={1} fit caps>
              Get ready for something
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Profound
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="#ffdb5c">
            <Heading size={1} fit caps lineHeight={1} textColor="#4897D8">
              COMPOSITION
            </Heading>
            <CodePane
                lang="jsx"
                source={require("raw!../assets/fp.composition.1.example")}
                margin="20px auto" />
          </Slide>
          <Slide transition={["slide"]} bgColor="#ffdb5c">
            <CodePane
                lang="jsx"
                source={require("raw!../assets/fp.composition.2.example")}
                margin="20px auto" />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.legos.replace("/", "")} bgDarken={0.5}>
            <Heading size={2} fit textColor="#4897D8">
              Now we can assemble functions like Legos!
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="#ffdb5c">
            <Heading size={1} fit caps lineHeight={1} textColor="#4897D8">
              COMPOSITION
            </Heading>
            <CodePane
                lang="jsx"
                source={require("raw!../assets/fp.composition.3.example")}
                margin="20px auto" />
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="black">
            <Heading caps fit textColor="#31A9B8" textSize="60px">Now we can take advantage of things like</Heading>
            <Heading caps textColor="#F70025" textSize="60px">
              Associativity
            </Heading>
            <CodePane
                lang="jsx"
                source={'const associative = compose(f, compose(g, h)) == compose(compose(f, g), h);'}
                margin="20px auto" />
            <Heading caps textColor="#F7EFE2" textSize="60px">
              Pointfree style
            </Heading>
            <CodePane
                lang="jsx"
                source={'compose(map(f), map(g));'}
                margin="20px auto" />
            <Heading caps textColor="#F25C00" textSize="60px">
              Category Theory
            </Heading>
            <CodePane
                lang="jsx"
                source={'const law = compose(map(f), map(g)) === map(compose(f, g));'}
                margin="20px auto" />
            <Heading caps textColor="#F9A603" textSize="60px">
              Hindley-Milner Notation
            </Heading>
            <CodePane
                lang="jsx"
                source={'//  map :: (a -> b) -> [a] -> [b]'}
                margin="20px auto" />
          </Slide>
          <Slide transition={["slide"]} bgColor="#ffdb5c">
            <Heading size={1} fit caps lineHeight={1} textColor="#4897D8">
              TIME FOR AN EXERCISE!
            </Heading>
            <Link href="https://jsbin.com/dujujigofe/edit">https://jsbin.com/dujujigofe/edit</Link>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="black">
            <Heading size={2} caps fit textColor="#31A9B8">
              That's all for now!
            </Heading>
            <Image src={images.fourierCat.replace("/", "")} margin="20px" height="300px"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading caps fit textColor="#375E97">Next time we'll look at...</Heading>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="#F5BE41">
                Hindley-Milner Notation
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="#31A9B8">
                Category Theory
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="#CF3721">
                Monads & Functors
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="White">
            <Heading caps fit textColor="#CF3721">Sources</Heading>
            <Markdown source={`
- https://drboolean.gitbooks.io/mostly-adequate-guide
- http://curtclifton.net/papers/MoseleyMarks06a.pdf
- http://icanhas.cheezburger.com/lolcats
- Google images
- https://designschool.canva.com/blog/100-color-combinations/
- https://xkcd.com/
- Wikipedia
            `}></Markdown>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}