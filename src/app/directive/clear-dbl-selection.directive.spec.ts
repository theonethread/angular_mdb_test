
import { ClearDoubleSelectionDirective } from './clear-dbl-selection.directive';

class EmptySelectionMock {
  empty() {}
}

class RemoveSelectionMock {
  removeAllRanges() {}
}

class DocumentMock {
  selection: EmptySelectionMock | RemoveSelectionMock;

  getSelection() {
    return this.selection;
  }
}

describe('ClearDoubleSelectionDirective', () => {
  let docMock: DocumentMock;
  let directive: ClearDoubleSelectionDirective;

  beforeEach(() => {
    docMock = new DocumentMock();
    directive = new ClearDoubleSelectionDirective(docMock);
  });

  it('should handle if getSelection is not available', () => {
    const getSelectionSpy = spyOn(docMock, 'getSelection');

    directive.onClick({
      detail: 2
    });

    expect(getSelectionSpy).toHaveBeenCalled();
  });

  it('should call selection\'s empty method, when available', () => {
    const selMock = new EmptySelectionMock();
    const emptySpy = spyOn(selMock, 'empty');
    docMock.selection = selMock;

    directive.onClick({
      detail: 2
    });

    expect(emptySpy).toHaveBeenCalled();
  });

  it('should call selection\'s removeAllRanges method, when empty method is not available', () => {
    const selMock = new RemoveSelectionMock();
    const removeAllRangesSpy = spyOn(selMock, 'removeAllRanges');
    docMock.selection = selMock;

    directive.onClick({
      detail: 2
    });

    expect(removeAllRangesSpy).toHaveBeenCalled();
  });
});
