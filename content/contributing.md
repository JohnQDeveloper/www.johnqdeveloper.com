---js
const eleventyNavigation = {
	key: "Contributing.md",
	order: 0
};
---

**Meta**
These projects are really meant for people with a sysadmin/developer background who are capable of debugging code, deployment tools, etc.

The maintainer's contribution is making these publicly available and ocassionally fixing issues with multiple user reports with sufficient detail to reproduce. I do not provide support of any kind for these projects, that is the community's responsiblilty.

If you want maintainer support contracts, those are available _for purchase_ on the contact page.

**Pull Requests/Issues**
1) If you submit a pull request, you should have treated AI (if used) at most as a pair programmer, and properly corrected any issues with its code. Vibe coded pull requests without any human review of the output will be closed without further discussion.

2) You are expected to have a junior professional level of knowledge. Most people have this by the second year of work or college in the field, so this is not a high bar but will help significantly with AI on the field that generally does not meet this standard which helps cut down on noise.

3) Pull requests should be based on the last qa release for the project. Anyone not based on that will be told to rebase without me thinking if the code is worth merging.

4) I probably will do one full review of a project and all its issues/merge requests every 3 months or so. This is ultimately a side project so I'm not reliable unless I'm being paid meainginful amounts of money (i.e. $1000s a month).

5) Any pull request must sign a contributor licensing agreement stating its their original work and being shared under the AGPL and that I have the right to relicense it for private versions for contract work. No CLA, no merge.

**Project Priorities**

Tbd; right now I'm just working on whatever strikes my fancy.

**Versioning**

Year = Major version for that year that might contain breaking changes.
2025.X.0-qa - Annual release with X being the minor release. (i.e. MARCH would be 2025.3.0)
2025.03.01-qa - Security/critical fix for the MARCH, 2025 release.

We will not be doing releases more frequently than once a year unless something more urgent needs to be done. Generally, I plan to release a major version in the same quarter each year to spread things around a bit. That said, if you see 2 years in a row with no release, you should assume its been abandoned.

2025.03.01-qa means it is the standard public QA release.

2025.03.01-lts means it is a LTS version I've been paid to maintain. That said, these versions will be in a private repo for paying customers so you won't see them in public much.
