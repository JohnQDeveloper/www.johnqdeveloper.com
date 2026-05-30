---js
const title = "May/2026 Update";
const date = "2026-05-01";
const draft = false;
const tags = ["2026", "software", "microsaas", "saas", "goals"];
---

So I built out [github.com/MultiverseIdle.com](https://github.com/JohnQDeveloper/MultiverseIdle.com) with a mixture of traditional coding and vibe coding. I'm genuinely not happy with it if we are being honest. I'm not sure if I want to try to salvage it later or move on to StarshipCorps.com and focus on a different niche altogether. I started that second project but realized I just don't feel my game design skills are up to the task of building a fun game. The incremental genre shouldn't feel like a chore to login daily to do your management and I'm not sure if its the fact I'm the developer but its the way I feel.

The other problem is its a bit euphoric to start a new project because you start thinking about it. The chasing of that "new project" high is definetly a problem for me. I rotate through projects somewhat to mitigate this (i.e. starting, working on it, then resuming it later when I get bored of the next project.). But its not perfect and especially when I'm just not happy with the results, I tend to ditch a project altogether rather than fight it out.

I'm not sure if that is productive or unproductive of a response to be honest.

Anyway.

Since writing is out, I keep trying it anyway but never get anywhere since after a certain point it feels like work, I've decided to tinker with a microsaas I can dogfood monitoring servers/websites/errors/etc. Basically a catch all set of agents to monitor the infrastrucutre I maintain. I kinda need that anyway. The main problem with this idea is its a crowded field and standing out is difficult. Services like NewRelic and Sentry cover the error/latency side of things pretty thoroughly (if at significant cost) while on the low end you have stuff like HetrixTools that just monitor "is it up" which kinda works as a strategy if we are being honest but much faster/minimal to implement.

So I'm starting with a HetrixTools-like service then plan to expand into error management and dogfooding the service for my own use.

That's where I'm at right now.

Now you might say "Why not use HetrixTools? Its free tier would cover what you need!"

True but I want an all-in-one service that meets my needs rather than maintaining multiple logins and tbh the HetrixTools side of thing is more a marketing issue to grow a service than a technical hurdle to overcome. The simple fact is HetrixTools itself is pretty minimal for what I'm duplicating (uptime/server monitoring) and its really just the efficiency of the service that I can only sort out by testing the project out in public with real users and seeing where the sticky points that have performance issues are.

So I might as well do that while I build up the error tracking side of the house.

Of course, this all depends on me not chasing that new project high and actually being happy with the results of this project. I'm pretty optimistic I can finish the HetrixTools style thing by the end of the year (or at least have a public beta) even if I get distracted.
