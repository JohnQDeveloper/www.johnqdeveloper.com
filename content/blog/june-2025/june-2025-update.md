---js
const title = "June 2025 Update";
const date = "2025-06-01";
const draft = false;
const tags = ["2025", "june", "projects", "annual goals update", "goals", "quarterly updates"]
---

**The basics here is there are a number of projects I failed to complete successfully in the past and I'm trying again in 2025/2026.**

Keep in mind, these are _rough goals_ and not _serious promises or deadlines_. This is ultimately just my hobby/psuedonym stuff.

1) Grand strategy roleplaying game that successfully mixes rollplayers with roleplayers in a play-by-post/PBEM style format for mechanics. Basic thoughts here are locking people in a risk range that even perfect play is sometimes going to lose to create enough strategic uncertainty to keep the min/max rollplaying types from bullying the rest. I'm hoping for the first iteration to be up and running by October 2025.
    1) Design was rough and still kinda is. I keep looking at the minimum scope and needing to shrink it and rebalance/rebuild the concept around the new smaller scope so it feels like a complete mini-game rather than just a tiny slice of a bigger one.
    2) The initial scope is going to be game rules with manual spreadsheet submissions / text posts to manage things. Not ideal to base it around a discord bot but it is the fastest MVP and I've too often ignored the advice of building the truly minimum viable idea and getting user acceptance resulting in project failures/stalling.

2) Write a LitRPG/Progression Fantasy Serial. I doubt I post it on an appropriate site (i.e. RoyalRoad and similar sites) this year, but I really should force myself to finish one and ignore that voice telling me my writing is crap. Just to see what happens. Probably coming in 2026.
    1) Rough concept but frankly, focusing on #1 and #3, as they are something that can run in parrallel better in terms of overlap on needs / projects / reuse of code.

3) Writing what I am calling "Open Startup Ops" which is basically a mix of existing open source software, deployment glue, and my own code. Basically, if there is not a MIT (or equivalent license) available that covers what I need I will write it. Otherwise I will grab what I can.
    1) In progress, written a number of minor skeleton deployment and other tooling to do the minimum viable server deploys with open source projects to cover the gaps and minimize the code I need. Main thing is really just testing the deployment pipeline and backup pipeline for these things before I use them seriously so the work required to stand them back up is a future me problem.
    2) I'm gonna only run Caddy, Ubuntu 24.04 LTS (or equivalent future LTS), MySQL, PHP, Python, Javascript/Node, and SqlLite/Litestream in terms of long term strategy. Anything that is not in the class of using this stuff (such as Postgres only) is gonna get ignored simply for operational sanity on a part time project developer time budget where I just can't afford to properly implement ALL THE THINGS.

4) I am going to do three month updates in MAR/JUN/SEPT/DEC as a rough plan. Sometimes that will just be a project update, sometime it will be multiple posts. Basically, I find it better to let stuff marinate rather than post it immediately since I tend to be overly verbose.
    1) Technically, this is May 24th that I started writing this up but the concept is still publish everything before the end of June and no real plan to uploda before June 1st given the desire to let things marinate.

**Open Startup Ops --- Free Marketing Strategies :: Deployment: Web Developer / Software Developer Tools**

1) Startup Ops is probably going to start with a RAG package tooling based on our stack, any github repo with a bit of a delay, and a small pay as you go charge ($10 for 10 credits with each credit being X tokens/words so I can scale it appropriately to the project). This is basically a hosted version of point #2 where I organize and sort through the RAG tooling for you and provide a prompt for you to do against a particular project as context.

2) For the above, free packages under the AGPL will be available for free on Github for common stuff like Laravel, Symfony, etc. by version (~3 versions per project, ~5 projects to start with).

3) In line with the above, I'm gonna build out the deployment tooling people can reuse even if its crap. I know its crap but since it is all with a perimeter on your own hardware, its crappiness is not really a serious issue as the holes are minor and if you are using this everyone inside the VPN perimiter is considered trusted from a "Am I running exploits against the stuff inside?" situation given these projects still have login walls and are meant for public internet deployment.

**GSRPG Playtest v1**

1) I am taking a page from Pathfinder's Kingmaker by having it be a minigame where it isn't fully running a kingdom but just a couple of pieces per player.

2) I'm taking a page from Civ 7 and running a 3 age game so players only have a 2 month commitment to a season rather than the full game. This allows them to just come back and "load a save" to continue at a later date. Obviously, gonna cap the # of saves and use payment as a way to expand this due to the resource costs for the thing + LLM costs.
