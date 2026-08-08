import { React, useState } from "react";
import FormStore from "../../Store/FormStore";

const TermsModal = () => {
  const closeTermsModal = FormStore((state) => state.closeTermsModal);
  const termsAccepted = FormStore((state) => state.termsAccepted);
  const [accepted, setAccepted] = useState(termsAccepted);

  return (
    <div className="fixed z-50 flex h-full w-full items-center justify-center bg-egg-dark/25">
      <div className="flex max-w-150 flex-col gap-5 rounded-2xl bg-bone p-5 inset-shadow-med">
        <h1 className="font-[PoppinsBold] text-swamp-green">
          Terms And Conditions
        </h1>

        <div className="flex flex-col gap-5 rounded-2xl border border-swamp-green p-5 text-sm opacity-75">
          <p>
            By submitting an application through the school's enrollment system,
            the parent, guardian, or applicant confirms that all information and
            documents provided are true, accurate, and complete to the best of
            their knowledge. The school reserves the right to verify the
            submitted information and request additional documentation when
            necessary. Submission of an application does not guarantee
            admission, as all applications remain subject to the school's
            evaluation and approval process.
          </p>
          <p>
            Parents and guardians agree to comply with the school's policies,
            rules, regulations, and payment schedules upon acceptance of the
            student's enrollment. Any false, misleading, or fraudulent
            information may result in the rejection of the application or
            cancellation of enrollment. The school also reserves the right to
            modify enrollment procedures, tuition fees, schedules, and policies
            when necessary, with proper notice provided to affected parties.
          </p>
          <p>
            By using this system, the parent, guardian, or applicant consents to
            the collection, storage, and processing of personal information for
            enrollment, academic, administrative, and communication purposes in
            accordance with applicable data privacy laws and school policies.
            The school shall take reasonable measures to protect personal data
            and use it only for legitimate educational and administrative
            purposes.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={accepted}
            className="cursor-pointer rounded-sm p-2 text-swamp-green duration-150 focus:ring-swamp-green"
            onChange={(e) => setAccepted(e.target.checked)}
          />
          <h3>I agree to the terms and conditions above</h3>
        </div>
        <button
          type="button"
          className="cursor-pointer rounded-lg border border-ashlight p-2 duration-150 hover:opacity-75 active:scale-95"
          onClick={() => closeTermsModal(accepted)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TermsModal;
