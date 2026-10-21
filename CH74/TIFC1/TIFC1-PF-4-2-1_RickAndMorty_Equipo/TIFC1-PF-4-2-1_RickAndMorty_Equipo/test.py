from main import character_fetch


def test_character_1_returns_dictionary():
    character = character_fetch(1)
    assert isinstance(character, dict)


def test_character_1_has_correct_id():
    character = character_fetch(1)
    assert character["id"] == 1


def test_character_6_has_correct_id():
    character = character_fetch(6)
    assert character["id"] == 6


def test_character_contains_expected_fields():
    character = character_fetch(1)
    assert "name" in character
    assert "status" in character
    assert "species" in character
