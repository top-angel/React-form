import SortableElement from './sortable-element';
import PlaceHolderComponent from './form-place-holder';
import * as BaseFormElements from './form-elements';

let {
  Header,
  Paragraph,
  Label,
  LineBreak,
  TextInput,
  EmailInput,
  NumberInput,
  MaskInput,
  TextArea,
  Dropdown,
  Checkboxes,
  DatePicker,
  RadioButtons,
  Image,
  Rating,
  Tags,
  Signature,
  HyperLink,
  Download,
  Camera,
  Range
} = BaseFormElements;

Header = SortableElement(Header);
Paragraph = SortableElement(Paragraph);
Label = SortableElement(Label);
LineBreak = SortableElement(LineBreak);
TextInput = SortableElement(TextInput);
EmailInput = SortableElement(EmailInput);
NumberInput = SortableElement(NumberInput);
MaskInput = SortableElement(MaskInput);
TextArea = SortableElement(TextArea);
Dropdown = SortableElement(Dropdown);
Signature = SortableElement(Signature);
Checkboxes = SortableElement(Checkboxes);
DatePicker = SortableElement(DatePicker);
RadioButtons = SortableElement(RadioButtons);
Image = SortableElement(Image);
Rating = SortableElement(Rating);
Tags = SortableElement(Tags);
HyperLink = SortableElement(HyperLink);
Download = SortableElement(Download);
Camera = SortableElement(Camera);
Range = SortableElement(Range);
let PlaceHolder = SortableElement(PlaceHolderComponent);
// const PlaceHolder = SortableElement(PlaceHolderComponent);

export {
  Header,
  Paragraph,
  Label,
  LineBreak,
  TextInput,
  EmailInput,
  NumberInput,
  MaskInput,
  TextArea,
  Dropdown,
  Checkboxes,
  DatePicker,
  RadioButtons,
  Image,
  Rating,
  Tags,
  Signature,
  HyperLink,
  Download,
  Camera,
  Range,
  PlaceHolder
};

/*
let SortableFormElements = {};

SortableFormElements.Header = SortableElement(Header);
SortableFormElements.Paragraph = SortableElement(Paragraph);
SortableFormElements.Label = SortableElement(Label);
SortableFormElements.LineBreak = SortableElement(LineBreak);
SortableFormElements.TextInput = SortableElement(TextInput);
SortableFormElements.NumberInput = SortableElement(NumberInput);
SortableFormElements.TextArea = SortableElement(TextArea);
SortableFormElements.Dropdown = SortableElement(Dropdown);
SortableFormElements.Signature = SortableElement(Signature);
SortableFormElements.Checkboxes = SortableElement(Checkboxes);
SortableFormElements.DatePicker = SortableElement(DatePicker);
SortableFormElements.RadioButtons = SortableElement(RadioButtons);
SortableFormElements.Image = SortableElement(Image);
SortableFormElements.Rating = SortableElement(Rating);
SortableFormElements.Tags = SortableElement(Tags);
SortableFormElements.HyperLink = SortableElement(HyperLink);
SortableFormElements.Download = SortableElement(Download);
SortableFormElements.Camera = SortableElement(Camera);
SortableFormElements.Range = SortableElement(Range);
SortableFormElements.PlaceHolder = SortableElement(PlaceHolder);

module.exports = SortableFormElements;
*/
