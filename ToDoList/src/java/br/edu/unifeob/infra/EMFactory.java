package br.edu.unifeob.infra;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class EMFactory {

    private final EntityManagerFactory factory;

    public EMFactory() {
        this.factory = Persistence.createEntityManagerFactory("ToDoListPU");
    }

    public EntityManager getEntityManager() {
        return this.factory.createEntityManager();
    }
}
