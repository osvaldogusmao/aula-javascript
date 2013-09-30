$(document).ready(function() {

    $('#btnAddTask').click(function() {

        var form = $('#frmTask').serialize();

        $.ajax({
            data: form,
            type: 'POST',
            url: '/todoList/task/create',
            dataType: 'json'
        }).done(function(task) {
            if (task.id > 0) {
                var html = "<tr id='" + task.id + "'>";
                html += "<td> <button class='btn btn-link done'><i class='icon icon-ok'></i> " + task.task + "</button> </td>";
                html += "</tr>";
                $('#tbToDo tbody:last').append(html);
                $('#task').val('');

                $('.done').click(function() {
                    changeTask(this);
                });
            }
        }).fail(function(data) {
            alert("Erro ao inserir a Task");
        });
    });

    $('.done').on('click', function() {
        changeTask(this);
    });

    function changeTask(component) {
        var idItem = $(component).parent().parent().attr('id');

        $.ajax({
            type: 'GET',
            url: '/todoList/task/done/' + $(component).parent().parent().attr('id')
        }).done(function(response) {
            if (response === 'OK') {
                var items = $('#tbToDo tbody').find('tr');
                $.each(items, function(index, value) {
                    if ($(value).attr('id') === idItem) {
                        $(this).fadeOut();
                        addItemCompleted($(this).parent().text().trim(), idItem);
                    }
                });
            }
        }).fail(function(data) {
            alert("Erro ao completar a Task");
        });
    }

    function addItemCompleted(task, idItem) {
        var html = "<tr id='" + idItem + "'>";
        html += "<td><button class='btn btn-link remove'><i class='icon-remove'></i> " + task + "</button></td>";
        html += "</tr>";
        $('#tbCompleted').show();
        $('#tbCompleted tbody:last').append(html);

        $('.remove').click(function() {
            removeTask(this);
        });
    }

    $('.remove').click(function() {
        removeTask(this);
    });

    function removeTask(component) {
        var idItem = $(component).parent().parent().attr('id');

        $.ajax({
            type: 'GET',
            url: '/todoList/task/remove/' + idItem
        }).done(function(response) {
            if (response === 'OK') {
                $(component).parent().parent().fadeOut();
            }
        }).fail(function(data) {
            alert("Erro ao deletar a Task");
        });
    }

});