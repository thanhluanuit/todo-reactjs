class TodosController < ApplicationController
  def index
    @todos = Todo.all
  end

  def update
    todo = Todo.find(params[:id])
    todo.update!(todo_params)

    respond_to do |format|
      format.json { render json: {status: todo.status} }
    end
  end

  protected

  def todo_params
    params.require(:todo).permit(:status, :content)
  end
end
