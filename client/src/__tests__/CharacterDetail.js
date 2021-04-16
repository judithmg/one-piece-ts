import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import {
  CharacterDetail,
  mapStateToProps,
  mapDispatchToProps,
} from "../pages/CharacterDetail/";

import { BrowserRouter } from "react-router-dom";

describe("Given a <CharacterDetail />", () => {
  const actions = {
    loadOneCharacter: jest.fn(),
    loadCharacterDetail: jest.fn(),
    isOneCharLoading: jest.fn(),
  };
  let character = {
    name: "Makino, Proprietor of a Relaxed Tavern",
    type: "PSY",
    class: ["Cerebral", "Fighter"],
    stars: 5,
    cost: 1,
    combo: 5,
    sockets: 4,
    maxLvl: 99,
    expToMax: 4000000,
    lvl1HP: 563,
    lvl1ATK: 644,
    lvl1RCV: 160,
    maxHP: 1645,
    maxATK: 1011,
    maxRCV: 468,
    growthRate: 1,
    id: 3383,
    alias: null,
    family: "Makino",
    cooldown: [13, 13],
  };
  let characters = [character, character];
  let charDetail = {
    id: "3383",
    captain: { base: "Boosts HP and RCV of Cerebral characters by 1.75x" },
    special: "Makes [PSY] orbs beneficial for Cerebral characters for 2 turns.",
    specialName: 'Today\'s Service: "Pirates Only"',
    support: [
      {
        Characters: "Shanks, Ben Beckman, Lucky Roux and Yasopp",
        description: [
          "Once per adventure, when an enemy inflicts you with Chain Multiplier Limit or Blindness, reduces Chain Multiplier Limit and Blindness duration by 1 turn.",
        ],
      },
    ],
    evolution: null,
    evolvers: null,
  };

  test("it renders", () => {
    render(
      <BrowserRouter match={{ charId: "1" }}>
        <CharacterDetail
          actions={actions}
          character={character}
          characters={characters}
          charDetail={charDetail}
        />
      </BrowserRouter>
    );
  });
  test("there is a heading with the character name", () => {
    render(
      <BrowserRouter match={{ charId: "1" }}>
        <CharacterDetail
          actions={actions}
          character={character}
          characters={characters}
          charDetail={charDetail}
        />
      </BrowserRouter>
    );
    const h2 = screen.getByText("Makino, Proprietor of a Relaxed Tavern");
    expect(h2).toBeInTheDocument();
  });
  test("there is a span with the char captain data", () => {
    render(
      <BrowserRouter match={{ charId: "1" }}>
        <CharacterDetail
          actions={actions}
          character={character}
          characters={characters}
          charDetail={charDetail}
        />
      </BrowserRouter>
    );
    const span = screen.getByText(
      "Boosts HP and RCV of Cerebral characters by 1.75x"
    );
    expect(span).toBeInTheDocument();
  });
  describe("When character has LB data", () => {
    test("Limit Break component is rendered", () => {
      character.class = "Fighter";
      charDetail = {
        id: "5008",
        captain:
          "Boosts ATK of Free Spirit characters by 3x and their HP by 1.2x and reduces damage received by 15%",
        special:
          "Deals 75x character's ATK in Typeless damage to all enemies, changes [STR], [DEX], [QCK], [INT] and [PSY] orbs on Free Spirit characters into Matching orbs, amplifies the effect of orbs of all characters by 2x for 1 turn and becomes Luffy & Ace for 3 turns",
        swap:
          "Removes all Despair, Paralysis and Slot Bind duration on themselves and changes their own orb, including [BLOCK] orbs, into a Matching orb",
        specialName: "Brotherly Bond",
        sailor: {
          base: "Makes [QCK] orbs beneficial for Free Spirit characters",
          level1:
            "Makes [TND] and [RCV] orbs beneficial for Free Spirit characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
          { description: "Boosts base RCV by 50" },
          { description: "Boosts base HP by 100" },
          { description: "Boosts base ATK by 100" },
          { description: "Reduce base Special Cooldown by 2 turns" },
          { description: "Boosts base ATK by 100" },
        ],
        potential: [
          {
            Name: "[STR] Damage Reduction",
            description: [
              "Reduce damage taken from [STR] characters by 1%",
              "Reduce damage taken from [STR] characters by 2%",
              "Reduce damage taken from [STR] characters by 3%",
              "Reduce damage taken from [STR] characters by 5%",
              "Reduce damage taken from [STR] characters by 7%",
            ],
          },
        ],
        evolution: null,
        evolvers: null,
      };
      render(
        <BrowserRouter match={{ charId: "1" }}>
          <CharacterDetail
            actions={actions}
            character={character}
            characters={characters}
            charDetail={charDetail}
          />
        </BrowserRouter>
      );
      const span = screen.getByText("Boosts base HP by 100");
      expect(span).toBeInTheDocument();
    });
  });
  describe("When character has two specials", () => {
    test("Then both specials are rendered", () => {
      charDetail.special = [
        {
          description:
            "Changes own orb into [PSY] and amplifies the effect of orbs of all characters by 1.5x for 1 turn.",
          cooldown: [13, 8],
        },
        {
          description:
            "Changes own orb into [PSY] and amplifies the effect of orbs of all characters by 1.75x for 1 turn.",
          cooldown: [19, 14],
        },
      ];
      render(
        <BrowserRouter match={{ charId: "1" }}>
          <CharacterDetail
            actions={actions}
            character={character}
            characters={characters}
            charDetail={charDetail}
          />
        </BrowserRouter>
      );
      const span = screen.getByText(
        "Changes own orb into [PSY] and amplifies the effect of orbs of all characters by 1.75x for 1 turn."
      );
      expect(span).toBeInTheDocument();
    });
  });
  describe("When character is dual", () => {
    test("Then both specials are rendered", () => {
      charDetail.special = {
        character1:
          "Deals 400x character's ATK in Typeless damage to one enemy, makes [DEX] and [QCK] orbs beneficial for all characters for 1 turn, amplifies the effect of orbs of all characters by 2.5x for 1 turn and becomes Luffy & Law for 3 turns.",
        character2:
          "Deals 75x character's ATK in Typeless damage to all enemies that will ignore damage negating abilities and barriers, makes [DEX] and [QCK] orbs beneficial for all characters for 1 turn, amplifies the effect of orbs of all characters by 2.5x for 1 turn and becomes Luffy & Law for 3 turns.",
      };
      render(
        <BrowserRouter match={{ charId: "1" }}>
          <CharacterDetail
            actions={actions}
            character={character}
            characters={characters}
            charDetail={charDetail}
          />
        </BrowserRouter>
      );
      const span = screen.getByText(
        "Deals 400x character's ATK in Typeless damage to one enemy, makes [DEX] and [QCK] orbs beneficial for all characters for 1 turn, amplifies the effect of orbs of all characters by 2.5x for 1 turn and becomes Luffy & Law for 3 turns."
      );
      expect(span).toBeInTheDocument();
    });
  });
  describe("When sailor is a string", () => {
    test("Then it is rendered", () => {
      charDetail.sailor = "Character random sailor";
      render(
        <BrowserRouter match={{ charId: "1" }}>
          <CharacterDetail
            actions={actions}
            character={character}
            characters={characters}
            charDetail={charDetail}
          />
        </BrowserRouter>
      );
      const span = screen.getByText("Character random sailor");
      expect(span).toBeInTheDocument();
    });
  });
  describe("When sailor is an object", () => {
    test("Then it is rendered", () => {
      charDetail.sailor = {
        level1: "random sailor object",
        level2: "random sailor objectx2",
      };
      render(
        <BrowserRouter match={{ charId: "1" }}>
          <CharacterDetail
            actions={actions}
            character={character}
            characters={characters}
            charDetail={charDetail}
          />
        </BrowserRouter>
      );
      const span = screen.getByText("random sailor object");
      expect(span).toBeInTheDocument();
    });
  });
  describe("When captain is a string", () => {
    test("Then it is rendered", () => {
      charDetail.captain = "Character random captain";
      render(
        <BrowserRouter match={{ charId: "1" }}>
          <CharacterDetail
            actions={actions}
            character={character}
            characters={characters}
            charDetail={charDetail}
          />
        </BrowserRouter>
      );
      const span = screen.getByText("Character random captain");
      expect(span).toBeInTheDocument();
    });
  });
  describe("When captain is an object", () => {
    test("Then it is rendered", () => {
      charDetail.captain = {
        level1: "random captain object",
        level2: "random captain objectx2",
      };
      render(
        <BrowserRouter match={{ charId: "1" }}>
          <CharacterDetail
            actions={actions}
            character={character}
            characters={characters}
            charDetail={charDetail}
          />
        </BrowserRouter>
      );
      const span = screen.getByText("random captain object");
      expect(span).toBeInTheDocument();
    });
  });
  test("Then all classes are rendered if it is a dual unit", () => {
    character.class = [
      ["Cerebral", "Fighter"],
      ["Cerebral", "Fighter"],
      ["Cerebral", "Fighter"],
    ];
    render(
      <BrowserRouter match={{ charId: "1" }}>
        <CharacterDetail
          actions={actions}
          character={character}
          characters={[]}
          charDetail={charDetail}
        />
      </BrowserRouter>
    );
    expect(screen.getByAltText("Cerebral")).toBeInTheDocument();
  });
  test("Then Booster is rendered if it is its class", () => {
    character.class = "Booster";
    render(
      <BrowserRouter match={{ charId: "1" }}>
        <CharacterDetail
          actions={actions}
          character={character}
          characters={[]}
          charDetail={charDetail}
        />
      </BrowserRouter>
    );
    expect(screen.getByAltText("Booster")).toBeInTheDocument();
  });
  test("Then unit type is used as class if it is a dual unit", () => {
    character.type = ["str", "dex"];
    character.name = "Luffy";
    render(
      <BrowserRouter match={{ charId: "1" }}>
        <CharacterDetail
          actions={actions}
          character={character}
          characters={[]}
          charDetail={charDetail}
        />
      </BrowserRouter>
    );
    expect(screen.getByText("Luffy")).toHaveClass("detail-name strcolor");
  });
});

describe("Given a mapStateToProps", () => {
  test("it should return a state", () => {
    const state = {
      charactersReducer: {
        characters: [],
        filters: [],
        charsShown: [],
        charactersFiltered: [],
      },
    };
    const result = mapStateToProps(state);
    expect(result).toEqual({
      characters: state.charactersReducer.characters,
      character: state.charactersReducer.character,
      charDetail: state.charactersReducer.charDetail,
    });
  });
});
describe("Given a mapDispatchToProps", () => {
  test("it should return an object", () => {
    const dispatch = jest.fn();
    const result = mapDispatchToProps(dispatch);
    expect(result.actions.isOneCharLoading).toBeTruthy();
  });
});
