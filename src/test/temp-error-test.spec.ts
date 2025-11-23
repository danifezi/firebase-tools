import { expect } from "chai";
import { FirebaseError } from "../../src/error";
import { errorMissingProject } from "../../src/emulator/commandUtils";

describe("errorMissingProject", () => {
  it("should throw a FirebaseError if options.project is undefined", async () => {
    const options = {};
    await expect(errorMissingProject(options)).to.be.rejectedWith(
      FirebaseError,
      "Project is not defined. Either use `--project` or use `firebase use` to set your active project.",
    );
  });

  it("should not throw if options.project is defined", async () => {
    const options = { project: "test-project" };
    await expect(errorMissingProject(options)).to.be.fulfilled;
  });
});
