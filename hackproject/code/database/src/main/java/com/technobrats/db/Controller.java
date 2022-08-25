package com.technobrats.db;

import com.technobrats.db.model.Credential;
import com.technobrats.db.model.Proof;
import com.technobrats.db.repo.CredentialsRepo;
import com.technobrats.db.repo.ProofsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController()
public class Controller {

    @Autowired
    private CredentialsRepo credentialsRepo;

    @Autowired
    private ProofsRepo proofsRepo;

    @PostMapping("/credential")
    public void saveCredential(@RequestBody Credential credential) {
        credentialsRepo.save(credential);
    }

    @GetMapping("/credential/{id}")
    public String getRelationDid(@PathVariable Integer id) {
        Optional<Credential> credential = credentialsRepo.findById(id);
        return credential.map(value -> value.relationshipDid).orElse(null);
    }

    @GetMapping("/credentialComplete/{id}")
    public Credential getCredential(@PathVariable Integer id) {
        Optional<Credential> credential = credentialsRepo.findById(id);
        return credential.orElse(null);
    }

    @GetMapping("/proof/{id}")
    public Proof getOpenProof(@PathVariable Integer id) {
        Optional<Proof> proof = proofsRepo.findById(id);
        return proof.orElse(null);
    }

    @PostMapping("/proof")
    public void saveProof(@RequestBody Proof proof) {
        proofsRepo.save(proof);
    }

}
