package br.edu.unifeob.dao;

import javax.persistence.EntityManager;
import br.edu.unifeob.infra.EMFactory;
import br.edu.unifeob.model.Task;
import java.util.List;

/**
 *
 * @author osvaldogusmao
 */
public class TaskDAO {

    private EntityManager entityManager;

    public TaskDAO() {
        this.entityManager = new EMFactory().getEntityManager();
    }

    public List<Task> list() {
        return entityManager.createNativeQuery("select * from Task where done = false", Task.class).getResultList();
    }

    public List<Task> listCompleted() {
        return entityManager.createNativeQuery("select * from Task where done = true", Task.class).getResultList();
    }

    public Task save(Task task) {
        Task taskSaved = null;
        this.entityManager.getTransaction().begin();
        taskSaved = this.entityManager.merge(task);
        this.entityManager.getTransaction().commit();
        return taskSaved;
    }

    public Task load(Integer pk) {
        return this.entityManager.find(Task.class, pk);
    }

    public void remove(Integer id) {
        this.entityManager.getTransaction().begin();
        this.entityManager.remove(this.load(id));
        this.entityManager.getTransaction().commit();
    }
}
