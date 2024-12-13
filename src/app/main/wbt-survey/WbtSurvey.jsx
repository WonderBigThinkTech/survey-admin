import React, { useCallback } from "react";
import "survey-core/modern.min.css";
import * as Survey from "survey-react";
import "./tabs/Index";

Survey.StylesManager.applyTheme("modern");

export default function SurveyJS() {
  const surveyModel = new Survey.Model({
    pages: [
      {
        name: "Text test",
        navigationTitle: "Text",
        navigationDescription: "text test",
        elements: [
          {
            type: "panel",
            name: "mui",
            title: "Text test Field",
            elements: [
              {
                type: "text",
                inputType: "text",
                name: "textquestions",
                title: "Title Survey",
                state: {
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                defaultValue: "Valeur Default Survey",
                description: 'Description de Survey "title"',
                titleLocation: "hidden",
                isRequired: false
              },
              {
                type: "text",
                inputType: "number",
                name: "numberquestion",
                title: "Number  -> inputype: number",
                state: {
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                titleLocation: "hidden",
                isRequired: false,
                hideNumber: false
              },
              {
                type: "text",
                inputType: "comment",
                name: "textmultiquestions",
                title: "Multiline -> inputype : comment",
                state: {
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                titleLocation: "hidden",
                multiline: true,
                isRequired: false
              },
            ]
          }
        ]
      },
      {
        name: "survey",
        navigationTitle: "Select test",
        navigationDescription: "select test",
        elements: [
          {
            type: "dropdown",
            inputType: "dropdown",
            name: "selectquestions",
            title: "Select",
            state: {
              iconHelp: "fa fa-question-circle",
              iconLeft: "fa fa-id-card",
              iconRight: "",
              helptext:
                "Ici la phrase d'aide du champ voir le json de Survey"
            },
            defaultValue: "Audi",
            hasNone: true,
            choices: ["Audi", "Peugeot", "Renault", "Volkswagen"],
            titleLocation: "hidden",
            isRequired: true
          },
          {
            type: "dropdown",
            inputType: "dropdown",
            name: "selectquestions",
            title: "Select",
            state: {
              iconHelp: "fa fa-question-circle",
              iconLeft: "fa fa-id-card",
              iconRight: "",
              helptext:
                "Ici la phrase d'aide du champ voir le json de Survey"
            },
            defaultValue: "Audi",
            hasNone: true,
            choices: ["Audi", "Peugeot", "Renault", "Volkswagen"],
            titleLocation: "hidden",
            isRequired: true
          },
          {
            type: "dropdown",
            inputType: "dropdown",
            name: "selectquestions",
            title: "Select",
            state: {
              iconHelp: "fa fa-question-circle",
              iconLeft: "fa fa-id-card",
              iconRight: "",
              helptext:
                "Ici la phrase d'aide du champ voir le json de Survey"
            },
            defaultValue: "Audi",
            hasNone: true,
            choices: ["Audi", "Peugeot", "Renault", "Volkswagen"],
            titleLocation: "hidden",
            isRequired: true
          },
          {
            type: "dropdown",
            inputType: "dropdown",
            name: "selectquestions",
            title: "Select",
            state: {
              iconHelp: "fa fa-question-circle",
              iconLeft: "fa fa-id-card",
              iconRight: "",
              helptext:
                "Ici la phrase d'aide du champ voir le json de Survey"
            },
            defaultValue: "Audi",
            hasNone: true,
            choices: ["Audi", "Peugeot", "Renault", "Volkswagen"],
            titleLocation: "hidden",
            isRequired: true
          },
          {
            type: "dropdown",
            inputType: "dropdown",
            name: "selectquestions",
            title: "Select",
            state: {
              iconHelp: "fa fa-question-circle",
              iconLeft: "fa fa-id-card",
              iconRight: "",
              helptext:
                "Ici la phrase d'aide du champ voir le json de Survey"
            },
            defaultValue: "Audi",
            hasNone: true,
            choices: ["Audi", "Peugeot", "Renault", "Volkswagen"],
            titleLocation: "hidden",
            isRequired: true
          },
        ]
      },
      {
        name: "Titre",
        navigationTitle: "Checkbox test",
        navigationDescription: "checkbox test",
        elements: [
          {
            type: "panel",
            name: "panel",
            title: "panel",
            elements: [
              {
                type: "checkbox",
                name: "multidropdownquestions",
                title: "Multi-Select",
                state: {
                  multiple: true,
                  isdropdown: false,
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                hasNone: true,
                choices: [
                  "Roadsters",
                  "Cruisers",
                  "Sportives",
                  "Trial",
                  "Supermotard"
                ],
                titleLocation: "hidden",
                isRequired: false
              },
              {
                type: "checkbox",
                name: "multidropdownquestions",
                title: "Multi-Select",
                state: {
                  multiple: true,
                  isdropdown: false,
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                hasNone: true,
                choices: [
                  "Roadsters",
                  "Cruisers",
                  "Sportives",
                  "Trial",
                  "Supermotard"
                ],
                titleLocation: "hidden",
                isRequired: false
              },
              {
                type: "checkbox",
                name: "multidropdownquestions",
                title: "Multi-Select",
                state: {
                  multiple: true,
                  isdropdown: false,
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                hasNone: true,
                choices: [
                  "Roadsters",
                  "Cruisers",
                  "Sportives",
                  "Trial",
                  "Supermotard"
                ],
                titleLocation: "hidden",
                isRequired: false
              },
              {
                type: "checkbox",
                name: "multidropdownquestions",
                title: "Multi-Select",
                state: {
                  multiple: true,
                  isdropdown: false,
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                hasNone: true,
                choices: [
                  "Roadsters",
                  "Cruisers",
                  "Sportives",
                  "Trial",
                  "Supermotard"
                ],
                titleLocation: "hidden",
                isRequired: false
              },
              {
                type: "checkbox",
                name: "multidropdownquestions",
                title: "Multi-Select",
                state: {
                  multiple: true,
                  isdropdown: false,
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                hasNone: true,
                choices: [
                  "Roadsters",
                  "Cruisers",
                  "Sportives",
                  "Trial",
                  "Supermotard"
                ],
                titleLocation: "hidden",
                isRequired: false
              },
              {
                type: "checkbox",
                name: "multidropdownquestions",
                title: "Multi-Select",
                state: {
                  multiple: true,
                  isdropdown: false,
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                hasNone: true,
                choices: [
                  "Roadsters",
                  "Cruisers",
                  "Sportives",
                  "Trial",
                  "Supermotard"
                ],
                titleLocation: "hidden",
                isRequired: false
              },
            ]
          }
        ]
      },
      {
        name: "Titre2",
        navigationTitle: "Radio test",
        navigationDescription: "radio test",
        elements: [
          
          {
            type: "panel",
            name: "panel",
            title: "panel",
            elements: [
              {
                type: "radiogroup",
                inputType: "radiogroup",
                name: "radiogroupquestions",
                title: "Radio",
                state: {
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                hasNone: true,
                choices: ["Kawazaki", "Honda", "Ducati", "Suzuki"],
                titleLocation: "hidden",
                isRequired: false
              },
              {
                type: "radiogroup",
                inputType: "radiogroup",
                name: "radiogroupquestions",
                title: "Radio",
                state: {
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                hasNone: true,
                choices: ["Kawazaki", "Honda", "Ducati", "Suzuki"],
                titleLocation: "hidden",
                isRequired: false
              },
              {
                type: "radiogroup",
                inputType: "radiogroup",
                name: "radiogroupquestions",
                title: "Radio",
                state: {
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                hasNone: true,
                choices: ["Kawazaki", "Honda", "Ducati", "Suzuki"],
                titleLocation: "hidden",
                isRequired: false
              },
              {
                type: "radiogroup",
                inputType: "radiogroup",
                name: "radiogroupquestions",
                title: "Radio",
                state: {
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                hasNone: true,
                choices: ["Kawazaki", "Honda", "Ducati", "Suzuki"],
                titleLocation: "hidden",
                isRequired: false
              },
              {
                type: "radiogroup",
                inputType: "radiogroup",
                name: "radiogroupquestions",
                title: "Radio",
                state: {
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                hasNone: true,
                choices: ["Kawazaki", "Honda", "Ducati", "Suzuki"],
                titleLocation: "hidden",
                isRequired: false
              },
              {
                type: "radiogroup",
                inputType: "radiogroup",
                name: "radiogroupquestions",
                title: "Radio",
                state: {
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                hasNone: true,
                choices: ["Kawazaki", "Honda", "Ducati", "Suzuki"],
                titleLocation: "hidden",
                isRequired: false
              },
            ]
          }
        ]
      },
      {
        name: "Titre3",
        navigationTitle: "Comment test",
        navigationDescription: "comment test",
        elements: [
          
          {
            type: "panel",
            name: "panel",
            title: "panel",
            elements: [
              {
                type: "comment",
                inputType: "text",
                name: "comments",
                title: "Comments",
                state: {
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                defaultValue: "Valeur Default Survey",
                description: 'Description de Survey "comment"',
                titleLocation: "hidden",
                hideNumber: true
              },
              {
                type: "comment",
                inputType: "text",
                name: "comments",
                title: "Comments",
                state: {
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                defaultValue: "Valeur Default Survey",
                description: 'Description de Survey "comment"',
                titleLocation: "hidden",
                hideNumber: true
              },
              {
                type: "comment",
                inputType: "text",
                name: "comments",
                title: "Comments",
                state: {
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                defaultValue: "Valeur Default Survey",
                description: 'Description de Survey "comment"',
                titleLocation: "hidden",
                hideNumber: true
              },
              {
                type: "comment",
                inputType: "text",
                name: "comments",
                title: "Comments",
                state: {
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                defaultValue: "Valeur Default Survey",
                description: 'Description de Survey "comment"',
                titleLocation: "hidden",
                hideNumber: true
              },
              {
                type: "comment",
                inputType: "text",
                name: "comments",
                title: "Comments",
                state: {
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                defaultValue: "Valeur Default Survey",
                description: 'Description de Survey "comment"',
                titleLocation: "hidden",
                hideNumber: true
              },
              {
                type: "comment",
                inputType: "text",
                name: "comments",
                title: "Comments",
                state: {
                  iconHelp: "fa fa-question-circle",
                  iconLeft: "fa fa-id-card",
                  iconRight: "",
                  helptext:
                    "Ici la phrase d'aide du champ voir le json de Survey"
                },
                defaultValue: "Valeur Default Survey",
                description: 'Description de Survey "comment"',
                titleLocation: "hidden",
                hideNumber: true
              },
            ]
          }
        ]
      },
      {
        name: "Titre3",
        navigationTitle: "Boolean test",
        navigationDescription: "bollean test",
        elements: [
          
          {
            type: "panel",
            name: "panel",
            title: "panel",
            elements: [
              {
                type: "boolean",
                name: "booleanquestion",
                title: "Boolean",
                defaultValue: "false",
                labelTrue: "",
                labelFalse: "",
                titleLocation: "hidden",
                isRequired: false,
                hideNumber: true
              },
              {
                type: "boolean",
                name: "booleanquestion",
                title: "Boolean",
                defaultValue: "false",
                labelTrue: "",
                labelFalse: "",
                titleLocation: "hidden",
                isRequired: false,
                hideNumber: true
              },
              {
                type: "boolean",
                name: "booleanquestion",
                title: "Boolean",
                defaultValue: "false",
                labelTrue: "",
                labelFalse: "",
                titleLocation: "hidden",
                isRequired: false,
                hideNumber: true
              },
              {
                type: "boolean",
                name: "booleanquestion",
                title: "Boolean",
                defaultValue: "false",
                labelTrue: "",
                labelFalse: "",
                titleLocation: "hidden",
                isRequired: false,
                hideNumber: true
              },
              {
                type: "boolean",
                name: "booleanquestion",
                title: "Boolean",
                defaultValue: "false",
                labelTrue: "",
                labelFalse: "",
                titleLocation: "hidden",
                isRequired: false,
                hideNumber: true
              },
              {
                type: "boolean",
                name: "booleanquestion",
                title: "Boolean",
                defaultValue: "false",
                labelTrue: "",
                labelFalse: "",
                titleLocation: "hidden",
                isRequired: false,
                hideNumber: true
              },
              {
                type: "boolean",
                name: "booleanquestion",
                title: "Boolean",
                defaultValue: "false",
                labelTrue: "",
                labelFalse: "",
                titleLocation: "hidden",
                isRequired: false,
                hideNumber: true
              },
              {
                type: "boolean",
                name: "booleanquestion",
                title: "Boolean",
                defaultValue: "false",
                labelTrue: "",
                labelFalse: "",
                titleLocation: "hidden",
                isRequired: false,
                hideNumber: true
              },
              {
                type: "boolean",
                name: "booleanquestion",
                title: "Boolean",
                defaultValue: "false",
                labelTrue: "",
                labelFalse: "",
                titleLocation: "hidden",
                isRequired: false,
                hideNumber: true
              },
            ]
          }
        ]
      }
    ],
    showProgressBar: "top",
    progressBarType: "buttons"
  });
  surveyModel.focusFirstQuestionAutomatic = true;

  const formCompleted = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);
  surveyModel.onComplete.add(formCompleted);

  return (
    <div id="form_survey">
      <Survey.Survey model={surveyModel} />
    </div>
  );
}
