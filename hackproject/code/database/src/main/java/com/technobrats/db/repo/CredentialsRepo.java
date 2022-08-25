package com.technobrats.db.repo;
import com.technobrats.db.model.Credential;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CredentialsRepo extends CrudRepository<Credential, Integer> {
}
