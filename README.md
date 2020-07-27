# Personal Website

This is my personal website, where I put an arbitrary selection of projects for the world to judge (and enjoy)! I designed it from scratch using Figma and built it using Next.js, a neat little React framework that made construction easy but deployment hell (due only to my relentless insistance on using GitHub Pgaes.)

**Website URL:** https://ilanbigio.com/

**Figma Designs:** https://www.figma.com/file/X9hzvLXDyNnWK0RNASmrkJ/Personal-Website

## Setup
In order to host this statically on GitHub Pages, you have to provide it with a static build, not straight Next.js. To do this I turned the `out` folder, where the static site build is located, into a [git subtree](https://www.atlassian.com/git/tutorials/git-subtree). By making the `out` folder be the `master` branch, GitHub Pages will happily host it. Therefore, the actual source files have to be in a different branch, which I just called `next-devel`.

Since cloning defaults the branch to master, run
```bash
git checkout next-devel
```

Then install dependenices by running
```bash
npm install
```

## Run and Deploy

To deploy the website locally, run
```bash
npm run dev
```

To deploy to github, run
```bash
npm run deploy
```

This command doesn't look like much, but in order to get this working with GitHub Pages it does the following:
- clears node cache
- builds and "exports" static version of the site into `out` directory
- creates a `.nojekyll` file inside `out`? (I don't remember why)
- copies the `CNAME` file into `out` so github knows my domain
- adds and commits the `out` dir to the `next-devel` branch for logging
- pushes the `out` subtree into `master`

It would have been so much easier to just use Vercel, which was literally created to host Next.js pages, but alas. I really wanted to use GitHub Pages.