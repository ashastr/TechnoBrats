package com.technobrats.db;

import com.technobrats.db.model.Credential;
import com.technobrats.db.repo.CredentialsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController()
public class Controller {

    @Autowired
    private CredentialsRepo credentialsRepo;

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


}
