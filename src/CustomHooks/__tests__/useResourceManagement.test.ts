import useResourceManagement from "../useResourceManagement";


describe('useResourceManagement', () => {
  it('should add a resource when user is logged in', () => {
    const hook = useResourceManagement();
    const newResource = { name: 'New Resource' };
    
    const result = hook.addResource(newResource);
    
    expect(result).toMatchSnapshot();
  });

  it('should return error message when user is not logged in while adding a resource', () => {
    const hook = useResourceManagement();
    const newResource = { name: 'New Resource' };
    
    const result = hook.addResource(newResource);

    expect(result).toMatchSnapshot();
  });

  it('should edit a resource when user is logged in', () => {
    const hook = useResourceManagement();
    const resourceId = '123';
    const updatedResource = { name: 'Updated Resource' };
    
    const result = hook.editResource(resourceId, updatedResource);

    expect(result).toMatchSnapshot();
  });

  it('should return error message when user is not logged in while editing a resource', () => {
    const hook = useResourceManagement();
    const resourceId = '123';
    const updatedResource = { name: 'Updated Resource' };
    
    const result = hook.editResource(resourceId, updatedResource);
    
    expect(result).toMatchSnapshot();
  });

  it('should delete a resource when user is logged in', () => {
    const hook = useResourceManagement();
    const resourceId = '123';
    
    const result = hook.deleteResource(resourceId);

    expect(result).toMatchSnapshot();
  });

  it('should return error message when user is not logged in while deleting a resource', () => {
    const hook = useResourceManagement();
    const resourceId = '123';
    
    const result = hook.deleteResource(resourceId);

    expect(result).toMatchSnapshot();
  });
});