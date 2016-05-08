## Website Performance Optimization portfolio project
####Part 1: PageSpeed Optimization
Optimization steps:

1. Resized and compressed views/images/pizzaeria.jgp and img/profilepic.jpg
2. Minified and inlined CSS rather than linking to external stylesheet
3. Set media attribute for print CSS
4. Set analytics js link to async
5. Followed [mcs' suggestion](https://discussions.udacity.com/t/web-font-optimization-choice-using-web-font-loader/37177/2?u=benm) and used @font-face rather than linking to google font

####Part 2: Optimize Frames per Second in pizza.html
Optimization steps:

1. Decreased the number of animated pizzas in the background.
2. Avoided forced synchronous layout on animated background pizzas by moving layout triggers out of loops
3. Streamlined pizza resize code by following Cameron's advice in Compositing and Painting lesson
4. Futher streamlined loops by removing more DOM calls
5. Added transform: translateZ(0) to trigger gpu

Visit my [GitHub page](http://bnmlr.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html) to see the pizza page in action

