---js
const eleventyNavigation = {
	key: "Contributing.md",
	order: 0
};
---

**Meta**
These projects are really meant for people with a sysadmin/developer background who are capable of debugging code, deployment tools, etc.

Some projects are meant to be used by end users (but not deployed by them) and this is an intentional decision.

All projects will be MIT licensed for public QA versions. Private LTS versions may have a separate license sometimes.

**Paid Support / LTS Versions**
See Contact johnqdeveloper.com for contact details and monthly retainer terms.

**JQD Projects**
johnQdeveloper.com contains announcements, roadmaps, and how I organize my adulting as well as what I believe. It also contains my availability to take on work, meetings, and contact points.

It also contains the standard documents (contributing, licensing, contract templates, etc.) for all of my projects under the pseudonym.

I will only respond to pull requests of sufficient quality / urgency as well as security issues that seem to be done by a professional and not AI/automated tools. The main purpose is to crowd source QA from end users so I can prioritize things I don't personally experience in terms of bugs and feature requests.

I understand (and myself) use AI but some people treat it as more reliable than something that can autocomplete boilerplate code or a single line of code. It is not able to write complete functions and/or contributions at a professional level. Similarly, anything more than autocomplete usage of AI is in legal limbo in many jurisdictions so you can't really sign off on it being your contribution to assign copyright to the project under the MIT license which will poison the project's future.

**Ways for any IT Professional/Student  to Contribute**
1) Community management to organize and condense a variety of conversations into a single issue/ticket that my automation properly counts priority based on community reactions / votes.
2) Testing and QA of versions with clear documentation so I can reproduce issues found and fix them. I may not respond but I do have an automated tool tracking upvotes / reactions to issues so I can prioritize fixes based on number of users affected or seriousness. The second one is AI so if it is a security issue be sure to use the appropriate GitHub contact point.
3) Providing documentation updates to make it easier for users.
4) Providing community support to other users as I will only provide paid support for my open source projects.
5) Read this document so you understand my methods to make contributions more relevant for me.

**Bug Reports**
1) You must include your OS (we only support Ubuntu LTS versions starting with 24.04) as well as expected behavior vs. actual behavior of the software.
2) Step by step reproduction steps for a bug is mandatory for an issue to have any chance at being addressed.
3) You must also include your version of the software.
4) Please be sure to search and upvote similar bugs rather than submit new ones as splitting votes across multiple issues/discussions will not properly upvote the priority in my tooling to determine what I work on next.

**Pull Requests**
1) Make sure pre-commit passes before submitting.
2) You are expected to handle pull request conflicts and other issues that may crop up until it's merged. If this does not happen in time for a release, it'll be left open for a while.
3) Generally pull requests are merged once a quarter when I take some time on a weekend to do code review. If you were not merged, it is not that you never will be but rather I'm budgeting 8-12 hours for QA/code review/merging across all my open source projects for pull requests so I'm time restricted.
4) That said, if I completely ignore your pull request and you think it was ready that likely means I'm not intending to merge it. I generally will comment that I plan to merge if I have time in a future review window. Generally I'll at least note that it will be reviewed in a future window when I have time if I intend to review it but didn't have time.
5) Ideally, I use accepted pull requests as a measure to find/measure potential collaborators. I can hand out permissions to do the code review, QA, and merge requests without me but that is not going to happen in 2025.
6) Pull requests should be bug fixes. They should not be features. They should not add dependencies or otherwise increase long term maintenance.
7) Pull requests should be based off of the MinorRelease branch which is the latest major version + any bug/security fixes.
8) Feature requests will be considered for major versions but you are going to be waiting a long time so keep that in mind. (i.e. 6-12 months)
9) If you want to PR a new feature, please make sure it is in the backlog of existing approved issues on my site. Roadmap is my plans, Icebox is stuff we aren't implementing in the next major version at a minimum.
10) You need to sign off that you are contributing under the MIT license and you did not use AI generated code to get things merged.

**Project Priorities**
1) Urgent is for security issues and critical bugs outside the normal release schedule.
2) Minor roadmap is for bugs intended to be fixed as part of the normal release schedule.
3) Major roadmap is for features and other larger changes as part of the annual release schedule.
4) Backlog is stuff that I'd like to do but have no plans to do right now.
5) Icebox is for stuff that might move into the backlog but is effectively tabled for at least 18+ months.

**Versioning**

Year = Major version for that year that might contain breaking changes.
2025.X.0-qa - Annual release with X being the minor release. (i.e. MARCH would be 2025.3.0)
2025.03.01-qa - Security/critical fix for the MARCH, 2025 release.

We will not be doing releases more frequently than once a year unless something more urgent needs to be done. Generally, I plan to release a major version in the same quarter each year to spread things around a bit. That said, if you see 2 years in a row with no release, you should assume its been abandoned. I'll do my best to handle my paperwork but things fall through the cracks.

2025.03.01-qa means it is the standard public QA release.

2025.03.01-lts means it is a LTS version I've been paid to maintain. That said, these versions will be in a private repo for paying customers so you won't see them in public much.
