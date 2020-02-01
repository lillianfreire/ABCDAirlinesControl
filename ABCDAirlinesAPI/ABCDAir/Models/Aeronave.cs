using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ABCDAir.Models
{
    public class Aeronave
    {
        [Key]
        public string PREFIX { get; set; }
        public decimal MAX_DEPARTURE_WEIGHT { get; set; }
        public decimal MAX_LANDING_WEIGHT { get; set; }
        public bool ACTIVE { get; set; }
        public string AIRCRAFT_MODEL { get; set; }
    }
}
