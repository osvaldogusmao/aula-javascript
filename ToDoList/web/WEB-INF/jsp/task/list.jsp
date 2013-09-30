<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>ToDo List</title>
        <link rel="stylesheet" href='<c:url value="/css/bootstrap.min.css"/>' media="screen"/>
        <script type="text/javascript" src='<c:url value="/js/jquery-1.10.2.min.js"/>'></script>
        <script type="text/javascript" src='<c:url value="/js/bootstrap.min.js"/>'></script>

    </head>
    <body>
        <div style="width: 420px; margin: 0 auto;">
            <br/>
            <h4>Task List</h4>
            <center>
                <form action="#" method="post" id="frmTask">
                    <div class="input-append">
                        <input class="span5" type="text" name="task" id="task" autocomplete="off">
                        <button class="btn btn-success" type="button" id="btnAddTask">
                            <i class="icon-white icon-plus-sign"></i>
                        </button>
                    </div>
                </form>
            </center>

            <table class="table table-condensed" id="tbToDo">
                <thead>
                    <tr>
                        <th><span class="badge badge-warning">To Do</span></th>                        
                    </tr>
                </thead>
                <tbody>
                    <c:forEach items="${tasks}" var="task">
                        <tr id="${task.id}">
                            <td>
                                <button class="btn btn-link done">
                                    <i class="icon icon-ok"></i>
                                    ${task.task}
                                </button>
                            </td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>

            <table class="table table-condensed" id="tbCompleted" <c:if test="${fn:length(tasksCompleted) <= 0}"> style="display: none;" </c:if> >
                    <thead>
                        <tr>
                            <th>
                                <span class="badge badge-success">Completed</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <c:forEach items="${tasksCompleted}" var="taskC">
                        <tr id="${taskC.id}">
                            <td>
                                <button class="btn btn-link remove">
                                    <i class="icon-remove"></i>
                                    ${taskC.task}
                                </button>
                            </td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>



        </div>
        <script type="text/javascript" src='<c:url value="/js/custom/task.js"/>'></script>
    </body>
</html>