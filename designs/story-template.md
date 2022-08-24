# Silent Authentication
 
#### Table of Contents
- [Use Case Story Title](#use-case-story-title) 
      - [Table of Contents](#table-of-contents)
  - [Acknowledgements](#acknowledgements)
  - [Business Challenge](#business-challenge)
    - [Concept](#concept)
    - [Approach](#approach)
  - [Vernacular](#vernacular)
  - [Assumptions](#assumptions)
  - [Persona](#persona)
  - [Story](#story)
  - [Demo Workflow](#demo-workflow)
    - [Step 1](#step-1)
    - [Step 2](#step-2)

 
## Acknowledgements

 
## Business Challenge
Interacting with the world around us using identity instruments is part of our daily lives, but today’s digital representations of our identity are far from secure.
Today when you call your Bank to get additional check books or do a wire transfer, first things customer support enquires is your personal identifiable information like SSN, date of birth, mothers maiden name etc. Imagine if you are travelling in public transport or you are in a non secure set up, you will not feel comfortable to share your PII and have concerns about sharing and protecting it. Given the ever-present threat that your information may fall into the wrong hands, it’s not surprising that 81 percent of the respondents feel they have lost control over the way their personal data are collected and used.

In 2022 average number of bank users (both mobile and web and across all products) who call customer service every day is around 1478656. Imagine the time spent by customer support agent authenticating each user with their PII before proceeding.

Imagine a tomorrow where you could call customer support and not share any of your PII and still get the results you called for. No manual verification of last 4 SSN or date of birth , mothers maiden name, full address etc would be needed which will result in improved fraud prevention, secure, trusted and faster authentication. Authentication would be as easy as a simple push notification and you will just have to approve it.
 
### Concept
>Template Instructions: Briefly describe how this use case applies digit trust technology to the business challenge. 
 
### Approach
>Template Instructions: Describe the end to end interactions of the stakeholders in the trust triangle pertinent to this use case story.

![trust-triangle](./images/misc/Silent_Authentication_Trust_Triangle.png)
 
## Vernacular

>Template Instructions: List and describe any terms that will be used in the story and referenced in the UML diagrams. The current list provides a a sample starter list. 
 
1. **Digital Wallet**: A financial transaction application that runs on multiple device modalities (mobile, computer). These applications store, manage, and present payment and identity instruments.
3. **Merchant**: An entity involved in e-commerce trade.
4. **Checkout Platform**: An e-Commerce Payment Platform (web application) used by merchants to manage the consumer experience and the end-to-end processing of e-commerce transactions.
5. **Credential Verifier Utility**: A merchant would augment their Checkout Platform with support by a vendor solution that allows consumers to: (a) consent to a digital authentication challenge; (b) present a digital credential for identity verification.
6. **Issuer**: A entity that makes assertions about information and delivers digital credentials containing attestations about those assertions.
7. **Credential Generator**: A software component used by the Issuer to manage the generation of new digital credentials.
8. **Credential Issuer Utility**: An Issuer would augment their Credential Generator with support by a vendor solution that allows Issuers to publish a digital credential to consumers.
9. **Public Registry**: A public utility that allows for the registration and discovery of Decentralized Identifiers (DIDs).
 
## Assumptions

>Template Instructions: List any assumptions to be considered in this use case story.
 
1. Use case assumes knowledge of the W3C Standards and open source software that supports the concepts outlined by the [Trust over IP Foundation](https://trustoverip.org/toip-model/).
2. Credential Issuer and Verifier Utility solutions are readily available from 3rd party vendors.
 
## Persona

>Template Instructions: Using the sample persona images in the /images folder, describe the roles of the entities involved in this use case story. The current list provides a a sample starter list. Refer to ./HELP.md#digital-trust-use-cases for example usage.
 
| Actor | Role | Goals | Details |
| --- | --- | --- | --- |
| <img src="./images/persona/discover_logo.png" width="60" height="60"> | Verifier |  |  |
|  <img src="./images/persona/acme-logo.png" width="50" height="40"> Acme Enterprise | Issuer |  |  |
| <img src="./images/persona/Angelica.png" width="40" height="40"> Angelica | Consumer |  |  |
 
## Story
>Template Instructions: Using the sample persona images in the /images folder, describe the steps that are involved in the interactive use case story. Refer to ./HELP.md#digital-trust-use-cases for example usage.
 
* <img src="./images/persona/acme-logo.png" width="50" height="40"> Acme Enterprise decided to issue a XYZ credential. 
 
## Demo Workflow

>Template Instructions: Using the sample persona images in the /images folder, describe the steps od the use case story as they relate to the UML diagram. Refer to ./HELP.md#digital-trust-use-cases for example usage. If desired, a single diagram can be used instead of multiple steps. 
 
### Step 1
<img src="./images/persona/acme-logo.png" width="50" height="40"> Acme Enterprise and <img src="./images/persona/discover_logo.png" width="60" height="60"> register their DIDs.
 
![step1](./images/uml/step1-diagram.png)
 
### Step 2
 
<img src="./images/persona/discover_logo.png" width="60" height="60"> challenges <img src="./images/persona/Angelica.png" width="50" height="50"> Angelica for a credential.
 
![step2](./images/uml/step2-diagram.png)
 
