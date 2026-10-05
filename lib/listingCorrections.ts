type CorrectableFacility = {
  name: string;
  address: string;
  city: string;
  place_id?: string | null;
};

const REMOVED_PLACE_IDS = new Set([
  // Duplicate of Back Pain Relief Chiropractic - Dr. Thomas Andrews DC.
  "ChIJ___-POWu44YRvZxtrpVFOk8",
]);

const ADDRESS_CORRECTIONS: Record<string, string> = {
  // The practice did not move; the City of Artesia renumbered the street.
  "ChIJq4-jPeWu44YR8fYBX4zlzvw": "1026 S 13th St, Artesia, NM 88210",
};

export function applyListingCorrections<T extends CorrectableFacility>(
  facilities: T[],
): T[] {
  return facilities
    .filter((facility) => !REMOVED_PLACE_IDS.has(facility.place_id ?? ""))
    .map((facility) => {
      const correctedAddress = ADDRESS_CORRECTIONS[facility.place_id ?? ""];
      return correctedAddress
        ? { ...facility, address: correctedAddress }
        : facility;
    });
}
