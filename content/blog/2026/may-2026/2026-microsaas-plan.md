---js
const title = "MarionetteOps Basic Plan";
const date = "2026-05-30";
const draft = false;
const tags = ["2026", "software", "microsaas", "saas", "goals"];
---

# Defining Success

1) Goal is to have free tier at capacity by end of Year 1
    * 600 users that login at least once every 90 days
2) The goal is to be 20% of the way to the final goal by the end of Year 2
    * 200*20 = $4000 MRR
3) Final Goal (Lifestyle Business)
    * 1,000 Paying User Package equivalent units (i.e. 1,000 $20/month users or 20 enterprise users)
    * $20000 MRR  

# The Offering

1) There will be a free, as in beer, tier with a cap of 600 users to provide a test bed for quality control of the actually paying customers. So people are paying in dealing with bugs rather than paying with money. Worthwhile tradeoff for some people. This free tier will have release for 30-60 days before the main service.

2) I'm just going to be doing a flat $20/month per "pack" of monitors, so a $20 minimum with $20 increments, though wether that is in that format or just $20, $60, $100 kind of thing is up in the air. Then jump to $999 for Enterprise where I'll actually send invoices and answer sales questions.

3) I'm going for feature parity with alot of common monitoring tools that service the lowend provider space (i.e. cheap and minimal) then expand functionality from there. But also work on a Sentry-esque minimal error tracking tool that keeps track of errors for the $CURRENT_MONTH so you can collect errors and work on them (frontend + backend obviously). Probably a sentry compatible library. This will give me features I need for dogfooding my own stuff without going overboard in terms of scope. Obviously, I won't have feature parity with Sentry, NewRelic, HetrixTools, etc. but that's fine. I just want something I can dogfood and expand on if it catches fire. Or just leave in a working state with the ocassional upgrade if not for my own use.

# The Infrastructure

I'm *probably* using a lowend provider (i.e. HostHatch) that has been in the game for a long time for the free tier. I'm budgeting ~$110/month for infrastructure, SaaS (customer service portal/inboxes probably Zendesk, e-mail newletter/announcements probably Mailerlite) in terms of what I'll spend. Of course, there is also the $40/month in AI subscriptions I spend (I try both Claude and ChatGPT basically).

It'll be a simple galera cluster with keepalived pingponging the IP around as needed to determine which server is "public" under the domain. Highly inefficient resource wise but it'll let me sleep (and probably) not have things go down unless its a datacenter level outage.

Then its just a question of buying a couple more VMs in other datacenters to run the uptime-monitor service as well.

# The Marketing Plan

1) Probably do a press release for backlink generation + general awareness of the project to make it look professional (i.e. As Seen on BusinessWire kind of thing) for $500.

2) Post in various LowEnd/Webhosting spaces since they need alot of monitoring and also people want to monitor their idlers.

3) Post on various subreddits on a weekly rotation (i.e. one self promotion post a week) with regular posting in between submissions.

4) Launch on ProductHunt and its clones once a month, once the service reaches the 1.0 version and I start charging money. (i.e. I've worked out the bugs with billing)

# Year 2

1) Reach 1.0 of the microsaas

2) Consider groups like TinySeed if there is enough traction to invest serious effort into the project.

3) Create a referal system

4) Reach 200 paying users ($4000 MRR) by end of Year 2 which would prove market fit if its on a growth trajectory with those kind of numbers.
