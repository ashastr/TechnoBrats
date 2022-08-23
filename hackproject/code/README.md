# Hack the Code
Follow these instructioins to develop a prototype for the ```Hack the Code``` track of the hackathon.

This repository is for the DFS Digital Identity Hackathon participants who are on the "hack-the-code" track.

There are three samples provided:

* [Sample issuer web application](issuer/README.md)

* [Sample verifier web application](verifier/README.md)

* [Sample mobile application](mobile/README.md)

The samples above may seem to imply that there will always be only one issuer and one verifier.  This is not true.  It is important for you to know that one or more of the following may be true for your use case.

* You may have multiple issuers.  For example, consider a use case in which a verifier requires some attributes from  a person's employment credential and other attributes from their driver's license.

* You may have multiple verifiers.  For example, consider a use case requiring multiple different types of verification and different places in an airport.

* You may have an entity which is both an issuer and a verifier.  For example, consider a use case in which a person's driver's license had to be verified before issuing them an employment credential.

* A single issuer may issue multiple types of credentials, each with a different schema.  For example, a single issuer might issue credentials for multiple types of employee badges.

All of these will be dependent upon your use case.