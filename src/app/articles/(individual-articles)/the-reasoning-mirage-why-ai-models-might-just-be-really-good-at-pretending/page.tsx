import References from "@/components/references";

const Article = () => {
  return (
    <>
      <h1>The Reasoning Mirage: Why AI Models Might Just Be Really Good at Pretending</h1>
      <p>Researchers at Apple released a paper called "The Illusion of Thinking: Understanding the Strengths and Limitations of Reasoning Models via the Lens of Problem Complexity" <sup><a href="#reference-1">[1]</a></sup>. Their research focuses on evaluating how reasoning models compare to ordinary Large Language Models (LLMs) when put through puzzle reasoning benchmarks with scalable complexity. The results are interesting.</p>
      <h2>LLMs and Large Reasoning Models (LRMs)</h2>
      <p>LLMs are sophisticated mathematical functions that use weighted parameters to predict the most likely next word based on context. LRMs perform additional reasoning before generating their final output. They use structured reasoning methodologies to evaluate and refine their responses. This methodology should increase their accuracy, particularly when tackling more complex problems.</p>
      <p>Conventional benchmarks show that reasoning models are in fact better at the benchmarks and even exceed PhD-level accuracy on solutions in some fields:</p>
      <blockquote>
        <p>OpenAI o1 ranks in the 89th percentile on competitive programming questions (Codeforces), places among the top 500 students in the US in a qualifier for the USA Math Olympiad (AIME), and exceeds human PhD-level accuracy on a benchmark of physics, biology, and chemistry problems (GPQA). <sup><a href="#reference-2">[2]</a></sup></p>
      </blockquote>
      <p>And that's OpenAI o1, there are newer OpenAI reasoning models that outperform o1 since then. That sounds great on the surface and there's been a lot of excitement and discussion about reasoning models since they were released.</p>
      <p>It seems like a step towards more sophisticated intelligence and a natural evolution of LLMs.</p>
      <h2>The Illusion of Thinking</h2>
      <p>With that we come to the paper <sup><a href="#reference-1">[1]</a></sup>. It challenges, evaluates and tests the strengths and limitations of these reasoning models through a different lens than the traditional benchmarks.</p>
      <p>Evaluating LLMs is difficult because we're testing systems that excel at pattern matching across massive datasets. When these models appear to reason through problems, it's nearly impossible to determine whether they're genuinely extending their capabilities by reasoning or retrieving sophisticated patterns from their training data to simulate a reasoning process. Many benchmarks may be contaminated by now, and we lack reliable methods to distinguish between genuine reasoning and very convincing pattern-based responses.</p>
      <p>Why do we care if the models can solve a problem correctly? To solve novel problems by drawing logical inferences and applying patterns across domains to generate new understanding. That process of using logic and applying patterns across fields would be close to the definition of general reasoning in cognitive science that defines it as:</p>
      <blockquote>
        <p>"…the cognitive process of drawing conclusions or making inferences based on available information or premises." <sup><a href="#reference-8">[8]</a></sup></p>
      </blockquote>
      <p>Most of the benchmarks where reasoning models are evaluated are math-heavy. They evaluate the final response, not the thought process and they are likely in the training data by now.</p>
      <h2>Testing Approach</h2>
      <p>The testing approach used in "The Illusion of Thinking" paper <sup><a href="#reference-1">[1]</a></sup> is with puzzle challenges - The Tower of Hanoi, River Crossing, Checker Jumping and Blocks World. These can be generated in numerous configurations and most importantly their complexity can be controlled.</p>
      <p>They test using thinking and non-thinking models from the frontier labs, primarily:</p>
      <ul>
        <li>Claude 3.7 Sonnet and Claude 3.7 Sonnet Thinking</li>
        <li>DeepSeek-V3 and DeepSeek-R1</li>
      </ul>
      <p>They test both the ability of the models to solve the puzzle which we can call accuracy, but also record the thinking effort as they increase complexity to test the limits of the models and evaluate if the reasoning stage really improves their capabilities by introducing generalizable reasoning.</p>
      <h2>The Results</h2>
      <p>There most interesting findings are that <sup><a href="#reference-1">[1]</a></sup>:</p>
      <ol>
        <li>
          In these puzzles LLMs outperform LRMs on simple tasks, as LRMs overthink and can reason themselves out of the correct answer.
          <ol className="list-[lower-latin]">
            <li>Even then it's worth mentioning both perform well and maybe the bigger reason not to use LRMs for simple tasks is that they would just waste tokens unnecessarily.</li>
          </ol>
        </li>
        <li>On medium complexity LRMs outperform LLMs, which is exactly what is expected, but is that because they extend their own capabilities by reasoning with logic or is there a different reason? There might be a different reason and that's what we'll see in a bit.</li>
        <li>With high complexity is where the interesting findings begin - both LLMs and LRMs collapse suddenly.</li>
        <li>More interestingly, reasoning efforts start decreasing as the problems get harder which is very unexpected. The researchers made sure to leave the models computational room in terms of tokens, so this is not a computational/token limit that is being hit.</li>
        <li>Even when the researchers instructed the model to use an explicit algorithm to solve the games successfully, the models did not improve their results.</li>
        <li>And finally - there were very big differences between the results in some games like The Tower of Hanoi, that is very popular among researchers and in computer science papers and articles and river crossing. The differences in the results were extreme - the models could perform up to 100 correct moves in the Tower of Hanoi but fail to provide more than 5 correct moves in the River Crossing puzzle.</li>
      </ol>
      <h2>What does this mean?</h2>
      <p>All of these findings together show that it's possible this isn't real reasoning <sup><a href="#reference-1">[1]</a></sup>. The big difference between Tower of Hanoi and River Crossing in terms of accuracy does hint that we could be seeing even better pattern matching with LRMs than LLMs because we extend the model's token window with the reasoning stage and its able to find more patterns.</p>
      <p>It is possible, that the LRM is giving us his best effort at something resembling a reasoning process on the topic, but does not actually apply patterns across domains with logic to actually reason through a novel problem, especially given that the reasoning effort decreases with complexity.</p>
      <p>I did have questions (and still do) about how that differs from general reasoning. From what I could find in my research of neuroscience papers, superior pattern processing is indeed a fundamental function of the human brain - according to a neuroscience paper by Mark P Mattson <sup><a href="#reference-3">[3]</a></sup>. However, human pattern processing comes with several additional characteristics that seem different from what we see in current AI models.</p>
      <p>First, our brains don't just match patterns - they actively model reality. According to Karl Friston and Stefan Kiebel, the brain "models the world as a hierarchy or cascade of dynamical systems" and "continuously makes predictions about the world and uses sensory input to update its models to improve accuracy" <sup><a href="#reference-4">[4]</a></sup>. This creates a feedback loop where the brain operates through "free energy minimization" - constantly generating predictions, comparing them to reality, and updating models to reduce "prediction error" <sup><a href="#reference-6">[6]</a></sup>.</p>
      <p>Second, human reasoning appears to be genuinely hierarchical. Our brains have specialized hierarchical processing capabilities, particularly in the prefrontal cortex, that enable "hierarchy building" and processing of "structurally complex sequences" <sup><a href="#reference-4">[4]</a></sup>. This allows us to do multi-level pattern abstraction - "Abstraction allows us to ignore irrelevant details and focus on the information we need in order to act, and inference is the use of knowledge to make educated guesses about the world around us" <sup><a href="#reference-5">[5]</a></sup>.</p>
      <p>Perhaps most importantly, humans demonstrate "fluid intelligence" - "the ability to solve logical problems, recognize patterns and process new information, independent of existing knowledge or learned skills" <sup><a href="#reference-7">[7]</a></sup>. This suggests we can genuinely reason beyond just sophisticated pattern matching.</p>
      <h2>How is this different from LLMs/LRMs and current AI</h2>
      <ol>
        <li>
          Better abstraction and compression of patterns into transferable principles
          <ul>
            <li>You learn debugging principles in one programming language and instantly apply them to a totally different language you've never seen before</li>
          </ul>
        </li>
        <li>
          Active testing and manipulation of the environment based on predictions
          <ul>
            <li>A toddler thinks "if I drop this cup, it will fall" and actually drops it to test the prediction</li>
          </ul>
        </li>
        <li>
          Hierarchical integration across multiple scales and domains
          <ul>
            <li>Recognizing that the same "feedback loop" pattern appears in everything from personal habits to economic systems to code architecture</li>
          </ul>
        </li>
        <li>
          Compositional recombination of patterns in novel ways
          <ul>
            <li>Combining musical rhythm patterns with visual design principles to create a new type of user interface animation</li>
          </ul>
        </li>
      </ol>
      <h2>Limitations of the Paper</h2>
      <p>The Illusion of Thinking paper <sup><a href="#reference-1">[1]</a></sup> reveals interesting findings. As a single paper it's not enough to make conclusions about reasoning and limitations of language models in general. The testing methodology, is somewhat limited and does not transfer directly to real-world problems.</p>
      <p>The findings of the paper do suggest that we might need to rethink how we evaluate reasoning capabilities with language models. Maybe these findings could be explained with a different limitation and not a fundamental flaw. On the other hand, it is also possible that the fundamental technology of large language models might be limited in terms of reasoning capabilities and a totally different approach would be necessary to achieve artificial general intelligence.</p>
      <h2>Conclusion</h2>
      <p>I am very curious about this topic, and as just a computer scientist and someone who doesn't have the background in neuroscience or artificial intelligence I find the topic very interesting and challenging. So please, share your thoughts and knowledge in the comments. Tell me where I'm wrong and share interesting papers or findings you have read. I would be fascinated to learn more and that's exactly why I'm making this video - to engage viewers in scientific literature and get feedback on ideas.</p>
      <h2>References</h2>
      <References>
        <References.Item
          id={1}
          author="Hagendorff, T., Fabi, S., & Kosinski, M."
          year="2025"
          title="The Illusion of Thinking: Understanding the Strengths and Limitations of Reasoning Models via the Lens of Problem Complexity"          source="Apple Machine Learning Research"
          url="https://machinelearning.apple.com/research/illusion-of-thinking"
        />
        <References.Item
          id={2}
          author="OpenAI"
          year="2024"
          title="Learning to Reason with LLMs"
          url="https://openai.com/index/learning-to-reason-with-llms/"
        />
        <References.Item
          id={3}
          author="Mattson, M. P."
          year="2014"
          title="Superior pattern processing is the essence of the evolved human brain"
          source="Frontiers in Neuroscience"
          url="https://pmc.ncbi.nlm.nih.gov/articles/PMC4141622/"
        />
        <References.Item
          id={4}
          author="Friston, K., & Kiebel, S."
          year="2009"
          title="Predictive coding under the free-energy principle"
          source="Philosophical Transactions of the Royal Society B"
          url="https://royalsocietypublishing.org/doi/10.1098/rstb.2008.0300"
        />
        <References.Item
          id={5}
          author="University of California - San Diego"
          year="2024"
          title="Scientists use brain scans and AI to 'decode' thoughts"
          source="ScienceDaily"
          url="https://www.sciencedaily.com/releases/2024/08/240814124435.htm"
        />
        <References.Item
          id={6}
          author="Friston, K., Daunizeau, J., Kilner, J., & Kiebel, S."
          year="2010"
          title="Action and behavior: a free-energy formulation"
          source="Biological Cybernetics"
          url="https://academic.oup.com/nsr/article/11/5/nwae025/7571549"
        />
        <References.Item
          id={7}
          author="Neuroscience News"
          year="2024"
          title="Intelligence linked to efficiency of brain's 'interconnected highway system'"
          url="https://neurosciencenews.com/intelligence-connectome-neuroscience-28230/"
        />
        <References.Item
          id={8}
          author="Association for Psychological Science"
          year="2016"
          title="The Realities of Reason"
          url="https://www.psychologicalscience.org/observer/the-realities-of-reason"
        />
      </References>
    </>
  );
};

export default Article;
