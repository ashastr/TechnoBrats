package com.technobrats.db.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Proof {
    @Id
    @Column
    public Integer id;

    @Column
    public String relationshipDid;

    @Column
    public String status;
}
