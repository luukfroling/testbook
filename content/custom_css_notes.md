# notes on custom CSS: 

## Add support for loading user-defined CSS stylesheet github issue 321

original issue <a> https://github.com/jupyter-book/myst-theme/issues/321 </a>

No support up until approx. end of jan. Links to pull request which should fix it

## Add support for user stylesheets - 540

Pull request: <a> https://github.com/jupyter-book/myst-theme/pull/540 </a>

From pull request "In #321, there is a brief discussion about the benefits of being able to use Tailwind. Integrating a pre-processor poses a challenge, because it requires something like a build plugin. We technically do not yet have a nice UX for doing work that is not AST transforms.

Alternatively, rather than compiling the CSS at content-build-time, we suggested the theme should take over this responsibility. In practice, this would mean that the server needs to run tailwind on the fly (in some capacity) in order to consume the raw CSS from the content server.

Both of these seem undesirable. I think instead we should make this a manual step that people need to perform. The benefits of that are that our themes can be trivial, and users (who, if wanting to use tailwind are probably more advanced users) can bring their own tooling.

I've implemented a demo of this workflow in <a> https://github.com/jupyter-book/book-theme-tailwind-quickstart </a> to demonstrate what it might look like."