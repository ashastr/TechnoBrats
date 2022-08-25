package com.technobrats.db.repo;

import com.technobrats.db.model.Proof;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProofsRepo extends CrudRepository<Proof, Integer> {
}
