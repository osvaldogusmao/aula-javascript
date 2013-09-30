/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package br.edu.unifeob.controller;

import br.edu.unifeob.dao.TaskDAO;
import br.edu.unifeob.model.Task;
import java.util.Calendar;
import net.sf.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author osvaldogusmao
 */
@Controller
@RequestMapping(value = "/task")
public class TaskController {

    @RequestMapping(value = "list")
    public String list(Task task, BindingResult result, Model model) {
        TaskDAO dao = new TaskDAO();

        model.addAttribute("tasks", dao.list());
        model.addAttribute("tasksCompleted", dao.listCompleted());
        model.addAttribute("task", new Task());
        return "/task/list";
    }

    @RequestMapping(value = "create", method = RequestMethod.POST)
    public @ResponseBody
    String create(@ModelAttribute(value = "task") Task task, BindingResult result) {
        TaskDAO dao = new TaskDAO();
        task.setDueDate(Calendar.getInstance());
        task.setDone(Boolean.FALSE);

        if (!result.hasErrors()) {
            task = dao.save(task);
        }

        JSONObject jsonObject = JSONObject.fromObject(task);

        return jsonObject.toString();
    }

    @RequestMapping(value = "done/{id}", method = RequestMethod.GET)
    public @ResponseBody String done(@PathVariable Integer id) {
        TaskDAO dao = new TaskDAO();
        
        Task task = dao.load(id);
        task.setDone(Boolean.TRUE);
        dao.save(task);
        return "OK";
    }
    
    @RequestMapping(value = "remove/{id}", method = RequestMethod.GET)
    public @ResponseBody String remove(@PathVariable Integer id){
        TaskDAO dao = new TaskDAO();
        dao.remove(id);
        return "OK";
    }
}