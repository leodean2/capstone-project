describe('Task Management', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/');
  });

  it('should create a new task', () => {
    cy.get('button').contains('Add Task').click();
    cy.get('input[name="title"]').type('New Task');
    cy.get('textarea[name="description"]').type('Task description');
    cy.get('button').contains('Create Task').click();
    
    cy.contains('New Task').should('exist');
  });

  it('should update task status', () => {
    cy.contains('New Task').parent().find('select').select('in-progress');
    cy.contains('New Task').parent().contains('in-progress').should('exist');
  });
});