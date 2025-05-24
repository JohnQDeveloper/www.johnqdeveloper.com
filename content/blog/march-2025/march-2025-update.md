---js
const title = "2025 Project Plans";
const date = "2025-03-01";
const draft = false;
const tags = ["2025", "march", "projects", "annual goals update", "goals"]
---

**The basics here is there are a number of projects I failed to complete successfully in the past and I'm trying again in 2025/2026.**

Keep in mind, these are _rough goals_ and not _serious promises or deadlines_. This is ultimately just my hobby/psuedonym stuff.

1) Grand strategy roleplaying game that successfully mixes rollplayers with roleplayers in a play-by-post/PBEM style format for mechanics. Basic thoughts here are locking people in a risk range that even perfect play is sometimes going to lose to create enough strategic uncertainty to keep the min/max rollplaying types from bullying the rest. I'm hoping for the first iteration to be up and running by October 2025.

2) Write a LitRPG/Progression Fantasy Serial. I doubt I post it on an appropriate site (i.e. RoyalRoad and similar sites) this year, but I really should force myself to finish one and ignore that voice telling me my writing is crap. Just to see what happens. Probably coming in 2026.

3) Writing what I am calling "Open Startup Ops" which is basically a mix of existing open source software, deployment glue, and my own code. Basically, if there is not a MIT (or equivalent license) available that covers what I need I will write it. Otherwise I will grab what I can.

4) I am going to do three month updates in MAR/JUN/SEPT/DEC as a rough plan. Sometimes that will just be a project update, sometime it will be multiple posts. Basically, I find it better to let stuff marinate rather than post it immediately since I tend to be overly verbose.

The main thing is just, I have failed at this before due to RL getting in the way and the quality of the results not being good enough for me to avoid a heavy rebuild so the old versions have kinda rotted away anyway. So keep that in mind, I would not depend on this stuff except for learning or something to fork to build off of unless this gets mingled with actual serious ($30k+ a year) income for side projects. Similarly, I don't really expect that to happen but I'm open to it if it does.

In other words, I'll probably setup a Patreon and Github Sponsors but not put effort into convincing people to pay for it beyond "its there if you want to support me".

### Basic Plan for Open Startup Ops

 ##### Hosting for Projects
    * QA/Dev-quality Single Server Availability
    * I am going to try to automate the rebuild for disaster recovery which is why I use Deployer. Ansible and more professional tools are "better" but I deal with people breaking these things in my day job (by not noticing dependency rot) while deployer I can usually wipe a VM and reload because my setup is mostly Ubuntu packages plus a few plugins specific to my setup (docker proxy for caddy, bunny ssl for caddy) that can be swapped out if I find them unreliable.
    * Part of why I'm not using kubernetes is just the fact for a single developer working on side projects, there is no reason to.
    * I'm basically showing the "low end" forum boards, if you know where I mean, where the people handling the hosting are more about learning/doing than actually making money. I mean, some of them make real businesses but they are the minority. Most overpromise and close shop because they run out of money. I tend to think of the majority of these host as a college student's first startup. Sure, Hetzner and OVH and other brands base their entire business on this market but there is a reason anyone who uses them knows they need multi-datacenter availability baked into their SRE planning. Full datacenter failovers are just going to happen every year when you go for the cheap-but-competent budget hosts.

##### Ubuntu 24.04 LTS
    * EOL April 2029
    * Planned upgrade is 28.04 LTS (April 2028)
    * Trying to use the packages as much as possible.  
    * Caddy Server
    * MySQL 8.4 LTS
    * PHP 8.3
    * Node 22.14.0 LTS
    * Python
    * Docker


 ##### Selfhosted Software + SaaS
    * Google Workspace + Discord - I may be psuedonymous but there is no point in worrying about "real privacy" in a scenario where random hosting companies, etc. have my billing info anyway.
    * https://deployer.org/ - there is disadvantages of using this vs, say, ansible or other more serious orchestration but its faster for me.
    * https://netbird.io/ - Basically opensource tailscale
    * https://www.11ty.dev/ - Static site generation for CDN upload
    * https://www.borgbase.com/ - Offsite Backups
    * https://github.com/glanceapp/glance + https://github.com/rajnandan1/kener + custom widgets to build a dashboard
    * https://github.com/dani-garcia/vaultwarden - Selfhosting secret management
    * https://github.com/umami-software/umami - Privacy friendly analytics. Similar reasoning as BunnyCDN. Just because I am very easy to find does mean I don't value a customer's privacy.
    * https://github.com/TecharoHQ/anubis - Not entirely sure I'll use this vs. rely on gmail/discord/github/et al spam filtering since I don't plan to have anything heavy worth crawling publicly accessible (beyond static files) but we'll see if I need it.


 ##### Dependency Security Management
    * https://github.com/renovatebot/renovate
    * https://github.com/mag37/dockcheck
    * npm audit; composer audit


 ##### Libraries
    * https://picocss.com/
    * https://github.com/alpinejs/alpine
    * https://lucide.dev/
    * https://www.brailleinstitute.org/freefont/ I kinda want to try this for web dev but everyone tells me no. Well no more gentleman, tonight we feast.
    * Some other stuff mixed in (ORM, discord bot, etc) but it is more up in the air and uncertain.
    * For instance, I'm not 100% sure how I'm going to migrate my mysql schemas given the mix of software since even if I use Larvel, its only a portion of the actual code (i.e. Laravel is one portion, Node.js or Python is another). That is the danger of cobbling stuff together based on well supported library over language choice I suppose.


##### Automated Notification Channels
    * Ntfy.sh
    * https://gotify.net/
    * Discord Webhook
    * Dashboard RSS Feed


##### Blog Syndication
    * Atom/RSS
